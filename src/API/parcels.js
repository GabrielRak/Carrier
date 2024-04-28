import { db } from "../firebase/init";
import { collection, getDocs, addDoc } from "firebase/firestore";
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
  const orderedCollectionRef = collection(
    db,
    "parcels",
    data.phone_number,
    "ordered"
  );
  const sendedCollectionRef = collection(db, "parcels", data.phone, "sended");
  try {
    const orderedRef = await addDoc(orderedCollectionRef, {
      sender: data.phone_number,
      phone_number: data.phone_number,
      inbox: data.inbox,
      email: data.email,
    });
    const sendRef = await addDoc(sendedCollectionRef, {
      phone_number: data.phone_number,
      inbox: data.inbox,
      email: data.email,
    });
  } catch (error) {
    console.error(error);
  }
};
