import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";

import Lab4 from "../screens/Lab4";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />

      <Tab.Screen name="Lab4" component={Lab4} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
