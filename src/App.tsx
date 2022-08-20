import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import WebLayout from "./components/Common/Layout/WebLayout";
import GlobalStyles from "./globalStyles";
import PrivateRoute from "./utils/PrivateRoute";

// PAGES
import Account from "./pages/Account";
import PostRole from "./pages/PostRole";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CreateAccount from "./pages/Account/CreateAccount";
import UserProfile from "./pages/UserProfile";
import ContactUser from "./pages/ContactUser";
import CastCallDetails from "./pages/CastCalls/castCallDetails";
import Applicants from "./pages/Applicants";
import TalentSearch from "./pages/TalentSearch";
import FindRole from "./pages/FindRole";
import NewsUpdate from "./pages/NewsUpdate";
import FacilityAssets from "./pages/FacilityAssets";
import HomePage from "./pages/HomePage";
import CastCalls from "./pages/CastCalls";
import Facilities from "./pages/Facilities";
import FacilityDetails from "./pages/Facilities/facilitiesDetails";
import SignOut from "./pages/SignOut";
import PostFacilities from "./pages/PostFacilities";
import ContactUs from "./pages/ContactUs";

// ROUTES
import {
  ACCOUNT_SETUP,
  CAST_CALL_DETAILS,
  CONTACT_USER,
  CREATE_ACCOUNT,
  FORGOT_PASSWORD,
  HOME,
  POST_ROLE,
  RESET_PASSWORD,
  SIGN_IN,
  USER_PROFILE,
  APPLICANTS,
  SEARCH_TALENT,
  FIND_ROLE,
  NEWS_UPDATE,
  FACILITY_ASSETS,
  CAST_CALLS,
  FACILITIES,
  FACILITY_DETAILS,
  SIGN_OUT,
  POST_FACILITIES,
  CONTACT_US,
  TERMS_OF_USE,
  PRIVACY_POLICY,
} from "./Navigation/routes";
import Error404 from "./pages/404";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <WebLayout>
        <Routes>
          <Route
            path={CAST_CALLS}
            element={
              <PrivateRoute>
                <CastCalls />
              </PrivateRoute>
            }
          />
          <Route
            path={FIND_ROLE}
            element={
              <PrivateRoute>
                <FindRole />
              </PrivateRoute>
            }
          />
          <Route
            path={SEARCH_TALENT}
            element={
              <PrivateRoute>
                <TalentSearch />
              </PrivateRoute>
            }
          />
          <Route
            path={ACCOUNT_SETUP}
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            path={POST_ROLE}
            element={
              <PrivateRoute>
                <PostRole />
              </PrivateRoute>
            }
          />
          <Route path={SIGN_IN} element={<SignIn />} />
          <Route
            path={SIGN_OUT}
            element={
              <PrivateRoute>
                <SignOut />
              </PrivateRoute>
            }
          />

          <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route
            path={RESET_PASSWORD}
            element={
              <PrivateRoute>
                <ResetPassword />
              </PrivateRoute>
            }
          />
          <Route path={CREATE_ACCOUNT} element={<CreateAccount />} />
          <Route
            path={USER_PROFILE}
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path={CONTACT_USER}
            element={
              <PrivateRoute>
                <ContactUser />
              </PrivateRoute>
            }
          />
          <Route
            path={CAST_CALL_DETAILS}
            element={
              <PrivateRoute>
                <CastCallDetails />
              </PrivateRoute>
            }
          />
          <Route
            path={APPLICANTS}
            element={
              <PrivateRoute>
                <Applicants />
              </PrivateRoute>
            }
          />
          <Route path={NEWS_UPDATE} element={<NewsUpdate />} />
          <Route
            path={FACILITY_ASSETS}
            element={
              <PrivateRoute>
                <FacilityAssets />
              </PrivateRoute>
            }
          />

          <Route
            path={FACILITIES}
            element={
              <PrivateRoute>
                <Facilities />
               </PrivateRoute>
            }
          />


          <Route
            path={POST_FACILITIES}
            element={
              <PrivateRoute>
                <PostFacilities/>
              </PrivateRoute>
            }
          />

          <Route
            path={FACILITY_DETAILS}
            element={
              <PrivateRoute>
                <FacilityDetails />
              </PrivateRoute>
            }
          />

          <Route path={HOME} element={<HomePage />} />
          <Route path={TERMS_OF_USE} element={<TermsOfUse />} />
          <Route path={PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={CONTACT_US} element={<ContactUs />} />
          {/* Error Page */}
          <Route
            path="*"
            element={<Error404 />}
          />


        </Routes>
      </WebLayout>
    </BrowserRouter>
  );
};

export default App;
