
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");

router.get(
    "/getalldata",
    
  
    async (req, res) => {
      try{
    
        res.json(alldata)
  
      }catch(err){
        res.json(alldata)
  
      }
      
    }
  );