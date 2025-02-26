import express from 'express';
import multer from 'multer'; // Multer for file uploads
import {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  ChangeJobApplicationsStatus,
  changeVisibility,
} from '../controllers/companyController.js';
import { protectCompany } from '../middleware/authMiddleware.js';

// Initialize router
const router = express.Router();

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' }); // Adjust destination folder as needed

// Routes

// Register a company
router.post('/register', upload.single('image'), registerCompany);

// Company login
router.post('/login', loginCompany);

// Get company data
router.get('/company',protectCompany,getCompanyData);

// Post a job
router.post('/post-job', protectCompany,postJob);

// Get applicants data of company
router.get('/applicants',protectCompany, getCompanyJobApplicants);

// Get company job list
router.get('/list-jobs',protectCompany, getCompanyPostedJobs);

// Change application status
router.post('/change-status',protectCompany, ChangeJobApplicationsStatus);

// Change application visibility
router.post('/change-visibility',protectCompany, changeVisibility);

// Export the router
export default router;
