import { getFirestore, collection, addDoc } from 'firebase/firestore'
import app from '../lib/firebase-config'
import { IStudentDetails } from '@/interfaces'

const db = getFirestore(app)

export const registerEvent = async (eventData: IStudentDetails) => {
  const { eventName, ...rest } = eventData

  try {
    // Reference the collection based on the eventName
    const eventCollectionRef = collection(db, eventName)

    // Add the document to the respective collection
    const docRef = await addDoc(eventCollectionRef, rest)
    alert('Registered Succesfully')
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}
