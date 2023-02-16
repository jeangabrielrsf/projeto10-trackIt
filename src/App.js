import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen/SignUpScreen";
import Habits from "./pages/Habits/Habits";
import Today from "./pages/Today/Today";
import TokenContext from "./contexts/TokenContext";
import UserProfileImageContext from "./contexts/UserProfileImageContext";
import HabitsPercentageContext from "./contexts/HabitsPercentageContext";
import HabitsDoneContext from "./contexts/HabitsDoneContext";
import DayTotalHabitsContext from "./contexts/DayTotalHabitsContext";
import Historic from "./pages/Historic/Historic";

export default function App() {
	const [userToken, setUserToken] = useState("");
	const [userImage, setUserImage] = useState("");
	const [habitsDone, setHabitsDone] = useState([]);
	const [totalHabits, setTotalHabits] = useState([]);
	const [percentage, setPercentage] = useState(0);

	return (
		<BrowserRouter>
			<TokenContext.Provider value={{ userToken, setUserToken }}>
				<UserProfileImageContext.Provider value={{ userImage, setUserImage }}>
					<HabitsDoneContext.Provider value={{ habitsDone, setHabitsDone }}>
						<DayTotalHabitsContext.Provider
							value={{ totalHabits, setTotalHabits }}
						>
							<HabitsPercentageContext.Provider
								value={{ percentage, setPercentage }}
							>
								<Routes>
									<Route path="/" element={<LoginScreen />} />
									<Route path="/cadastro" element={<SignUpScreen />} />
									<Route path="/hoje" element={<Today />} />
									<Route path="/habitos" element={<Habits />} />
									<Route path="/historico" element={<Historic />} />
								</Routes>
							</HabitsPercentageContext.Provider>
						</DayTotalHabitsContext.Provider>
					</HabitsDoneContext.Provider>
				</UserProfileImageContext.Provider>
			</TokenContext.Provider>
		</BrowserRouter>
	);
}
