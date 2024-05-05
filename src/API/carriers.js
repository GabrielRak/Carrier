import { db } from "../firebase/init";
import { collection,getDocs,setDoc,doc,getDoc,deleteDoc} from "firebase/firestore";
import { nanoid } from "nanoid";


export const becomeCarrier = async (data) => {
    console.log(data);
    const docRef = doc(db, "users", data.email);
    try {
      const id = nanoid();
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const carrierCollectionRef = doc(
          db,
          "carrierRequests",
          id
        );
        try {
          const carrierRef = await setDoc(carrierCollectionRef, {
            phone_number: data.phone_number,
            email: data.email,
            message: data.message,
            // name: data.name,
            // surname: data.surname,
            id: id,
          });
        
          return "Carrier request submitted successfully.";
        } catch (error) {
          console.error("Error adding documents: ", error);
          return "Failed to submit request.";
        }
      } else {
        return "There is no user with this email in our database.";
      }
    } catch (error) {
      return "Error in fetching user information.";
    }
  };
  
  export const fetchCarrierRequests = async () => {
    try {
      const docRef = collection(db, "carrierRequests");
      const docSnap = await getDocs(docRef);
      const data = [];
      docSnap.forEach((doc) => {
        data.push(doc.data());
      });
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  export const fetchRequestDetails = async (data) => {
    try {
      const docRef = doc(db, "carrierRequests", data.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  export const acceptRequestAPI = async (data) => {
    console.log("kutaz kozua " + data);
    const docRef = doc(db, "users", data.email);
    try {
      // const id = nanoid();
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const carrierCollectionRef = doc(
          db,
          "carriers",
          data.email
        );
        try {
          const carrierRef = await setDoc(carrierCollectionRef, {
            // phone_number: data.phone_number,
            email: data.email,
            // message: data.message,
            // name: data.name,
            // surname: data.surname,
          });

          try {
            console.log("kutas kaczki: " + data);
            const docRef = doc(db, "carrierRequests", data.id);
            deleteDoc(docRef);
            console.log("Document successfully deleted");
          } catch (error) {
            console.error("Error removing document: ", error);
          }
        
          return "Carrier request submitted successfully.";
        } catch (error) {
          console.error("Error adding documents: ", error);
          return "Failed to submit request.";
        }
      } else {
        return "There is no user with this email in our database.";
      }
    } catch (error) {
      return "Error in fetching user information.";
    }
  

  };

  export const denyRequestAPI = async (data) => {
      try {
        console.log("kutas kaczki: " + data);
        const docRef = doc(db, "carrierRequests", data.id);
        deleteDoc(docRef);
        console.log("Document successfully deleted");
      } catch (error) {
        console.error("Error removing document: ", error);
      }

  };

  
  // export const acceptRequestAPI = async (data) => {
  //   try {
  //     const docRef = collection(db, "carrierRequests");
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       return docSnap.data();
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };