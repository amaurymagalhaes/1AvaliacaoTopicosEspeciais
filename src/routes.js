import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import QuestionOne from './pages/QuestionOne';
import QuestionTwo from './pages/QuestionTwo';
import QuestionThree from './pages/QuestionThree';
import QuestionFour from './pages/QuestionFour';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'QuestionFour'}
                headerMode={null}>
                <Stack.Screen name="QuestionTwo" component={QuestionTwo} />
                <Stack.Screen name="QuestionOne" component={QuestionOne} />
                <Stack.Screen name="QuestionThree" component={QuestionThree} />
                <Stack.Screen name="QuestionFour" component={QuestionFour} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
