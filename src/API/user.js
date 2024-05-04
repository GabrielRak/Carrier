import { db } from "../firebase/init";
import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

export const fetchData = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const setUser_Data = async (data) => {
  try {
    const docRef = doc(db, "users", data.uid);
    const ref = await setDoc(
      docRef,
      {
        name: data.name,
        surrname: data.surrname,
        phone: data.phone_number,
        inbox: data.inbox,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error while setting user data" + error);
  }
};

export const alterUser_Inbox = async (data) => {
  try {
    const docRef = doc(db, "users", data.uid);
    const ref = await updateDoc(docRef, {
      inbox: data.inbox,
    });
  } catch (error) {
    console.error(error);
  }
};
export const check_admin = async (email) => {
  try {
    const q = query(collection(db, "admins"), where("email", "==",email));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      return false
    }else{
      return true
    }
  } catch (error) {
    console.error(error);
  }
};
export const check_carrier = async (email) => {
  try {
    const q = query(collection(db, "carriers"), where("email", "==",email));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      return false
    }else{
      return true
    }
  } catch (error) {
    console.error(error);
  }
};
