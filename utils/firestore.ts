import firestore from '../data/firebase'

export default class Firestore {
  static async addDocument(uid:string, properties : object) {
    return await firestore.collection('users').doc(uid).set({...properties
    });
  }

  static async getDocument(uid:string) {
    return await firestore.collection('users').doc(uid).get()
  }
}