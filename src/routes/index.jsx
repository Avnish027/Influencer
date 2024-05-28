import { Route, Routes } from "react-router-dom";
// import MainLayout from "../Layout/MainLayout";
import Navbar from "../components/Navbar/Navbar";
import Home from '../Pages/Home/Home'
import Campagins from '../Pages/Campagins/Campagins'
import Collab from '../Pages/Collab/Collab'
import Courses from '../Pages/Courses/Courses'
import Like from '../Pages/Like/Like'
import Message from '../Pages/Message/Message'
import Search from '../Pages/Search/Search'
import Signin from '../Pages/Signin/Signin'
import Home_login from "../Pages/Home_login/Home_login";
import Invoice1 from "../Pages/Invoice/Invoice1";
import Invoice2 from "../Pages/Invoice/Invoice2";
import Invoice3 from "../Pages/Invoice/Invoice3";
import Invoice4 from "../Pages/Invoice/Invoice4";
import Invoice5 from "../Pages/Invoice/Invoice5";
import Invoice6 from "../Pages/Invoice/Invoice6";
import Invoice7 from "../Pages/Invoice/Invoice7";

import Navbar2 from '../components/Navbar2/Navbar2'
import AboutUsA from '../Pages/AboutUs/AboutUsA'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Career from '../Pages/Career/Career'
import Collab_B from '../Pages/Collab/Collab_B'






// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainLayout></MainLayout>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/aboutus",
// 				element: <AboutUs />,
// 			},
// 		],
// 	},
// ]);

// const Routers = () => {
// 	return (
// 		<Routes>
// 			<Route
// 				path="/"
// 				element={<MainLayout></MainLayout>}
// 			>
// 				<Route
// 					path="/"
// 					element={<Home />}
// 				/>
// 				<Route
// 					path="/aboutus"
// 					element={<AboutUs />}
// 				/>
// 			</Route>
// 		</Routes>
// 	);
// };

// export default Routers;


const Routers = () => {
	return (
		<>	
			<Navbar/>
			{/* <Navbar2/> */}
			<Routes>
			<Route exact path="/" Component={Home}/>
			<Route exact path="/courses" Component={Courses}/>
			<Route exact path="/collabs" Component={Collab}/>
			<Route exact path="/campagins" Component={Campagins}/>
			<Route exact path="/like" Component={Like}/>
			<Route exact path="/message" Component={Message}/>
			<Route exact path="/home_login" Component={Home_login}/>
			<Route exact path="/search" Component={Search}/>
			<Route exact path="/signin" Component={Signin}/>


			{/* <Route exact path="/" Component={Invoice1}/>
			<Route exact path="/invoice2" Component={Invoice2}/>
			<Route exact path="/invoice3" Component={Invoice3}/>
			<Route exact path="/invoice4" Component={Invoice4}/>
			<Route exact path="/invoice5" Component={Invoice5}/>
			<Route exact path="/invoice6" Component={Invoice6}/>
			<Route exact path="/invoice7" Component={Invoice7}/> */}

			{/* <Route exact path="/" Component={AboutUsA}/>
			<Route exact path="/about_us" Component={AboutUs}/>
			<Route exact path="/career" Component={Career}/>
			<Route exact path="/collab" Component={Collab_B}/>


 */}






			</Routes>
		</>
	);
};

export default Routers;

