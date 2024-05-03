import { db } from "../firebase/init";
import { collection,getDocs,setDoc,doc,getDoc,deleteDoc} from "firebase/firestore";
import { nanoid } from "nanoid";

export const fetchOrdered_parcels = async (phone_number) => {
  try {
    const docRef = collection(db, "parcels", phone_number, "ordered");
    const docSnap = await getDocs(docRef);
    const data = [];
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchExistingInboxes = async () => {
  try {
    const docRef = collection(db, "inboxes");
    const docSnap = await getDocs(docRef);
    const data = [];
    docSnap.forEach((doc) => {
      data.push(doc.data().Name);
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchSended_parcels = async (phone_number) => {
  try {
    const docRef = collection(db, "parcels", phone_number, "sended");
    const docSnap = await getDocs(docRef);
    const data = [];
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const sendPackage = async (data) => {
  const docRef = doc(db, "users", data.email);
  try {
    const id = nanoid();
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data()["phone"] === data.phone_number) {
      const ordererInbox = docSnap.data()["inbox"];
      const orderedCollectionRef = doc(
        db,
        "parcels",
        data.phone_number,
        "ordered",
        id
      );
      const sendedCollectionRef = doc(db, "parcels", data.phone, "sended", id);
      try {
        const orderedRef = await setDoc(orderedCollectionRef, {
          sender: data.phone_number,
          inbox: ordererInbox,
          phone_number: data.phone_number,
          email: data.email,
          title: data.title,
          id: id,
        });
        const sendRef = await setDoc(sendedCollectionRef, {
          sender: data.phone,
          inbox: ordererInbox,
          phone_number: data.phone_number,
          email: data.email,
          title: data.title,
          id: id,
        });
        return "Packages successfully added.";
      } catch (error) {
        console.error("Error adding documents: ", error);
        return "Failed to add packages.";
      }
    } else if (docSnap.exists()) {
      return "Make sure the phone number matches email of an receiver";
    } else {
      return "There is no user with this email in our database.";
    }
  } catch (error) {
    return "Error in fetching user information.";
  }
};

export const fetchPackage_details = async (data) => {
  try {
    const docRef = doc(db, "parcels", data.phone_number, "ordered", data.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      const docRef = doc(db, "parcels", data.phone_number, "sended", data.id);
      const docSnap = getDoc(docRef);
      return (await docSnap).data();
    }
  } catch (error) {
    console.error(error);
  }
};
export const remove_package = async (data) => {
  try {
    console.log(data);
    const docRef = doc(db, "parcels", data.phone_number, "ordered", data.id);
    deleteDoc(docRef);
    console.log("Document successfully deleted");
    try {
      const toDelete = doc(db, "parcels", data.sender, "sended", data.id);
      await deleteDoc(toDelete);
      console.log("Deletet from sender");
    } catch (error) {
      console.error("Error removing document from sender:", error);
    }
  } catch (error) {
    console.error("Error removing document: ", error);
  }
};
