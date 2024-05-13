// firebaseUtils.js
import { collection, addDoc , serverTimestamp, getDocs} from "firebase/firestore";
import { firestoreDb } from '../config/firebaseSetup';

export async function createBlog(collectionName: string, payload: any) {
    const newPayload = { ...payload, created: serverTimestamp() };
    const newDocRef = await addDoc(collection(firestoreDb, collectionName), newPayload);
    return newDocRef.id;
  }
  
  // Function to get a list of documents from a collection
export async function getBlog(collectionName: string) {
    const col = collection(firestoreDb, collectionName);
    const snapshot = await getDocs(col);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  
//   // Function to add a new document to a collection
//   export async function addDocument(collectionName, data) {
//     const newDocRef = await addDoc(collection(db, collectionName), data);
//     return newDocRef.id;
//   }
  
//   // Function to update an existing document in a collection
//   export async function updateDocument(collectionName, documentId, newData) {
//     const docRef = doc(db, collectionName, documentId);
//     await updateDoc(docRef, newData);
//   }
  
//   // Function to delete a document from a collection
//   export async function deleteDocument(collectionName, documentId) {
//     const docRef = doc(db, collectionName, documentId);
//     await deleteDoc(docRef);
//   }
