////////// Functions that Return Something /////////


// /// 1. Number

// import React from "react";
// import { Text, View } from "react-native";

// export default function App(): JSX.Element {
//   function getNumber(): number {
//     return 42;
//   }
//   console.log(getNumber())
//   const numberResult = getNumber();

//   return (
//     <View>
//       <Text>Alhamdulillah</Text>
//       <Text>Result of getNumber function: {numberResult}</Text>
//     </View>
//   )
// }




// /// 2. String

// import React from "react";
// import { Text, View } from "react-native";

// export default function App(): JSX.Element {
//   function getString(): string {
//     return "Hi, React Native!";
//   }
  
//   console.log(getString())
//   const stringResult = getString();

//   return (
//     <View>
//       <Text>Alhamdulillah</Text>
//       <Text>Result of getString function: {stringResult}</Text>
//     </View>
//   )
// }



// /// 3. Boolean
// // IMPORTANT: React Native does not render boolean values directly in the same way it does for strings or numbers. To display the result of a boolean function like getBoolean() on the screen, you need to convert it to a string explicitly.

// import React from "react";
// import { Text, View } from "react-native";

// export default function App(): JSX.Element {
//   function getBoolean(): boolean {
//     return true;
//   }
  
//   console.log(getBoolean())
//   const booleanResult = getBoolean().toString(); // Convert boolean to string

//   return (
//     <View>
//       <Text>Alhamdulillah</Text>
//       <Text>Result of getBoolean function: {booleanResult}</Text>
//     </View>
//   )
// }



// /// 4. Array

// import React from "react";
// import { Text, View } from "react-native";

// export default function App(): JSX.Element {
//   function getArray(): number[] {
//     return [1, 2, 3, 4, 5];
//   }
  
//   console.log(getArray())
//   const arrayResult = getArray()

//   return (
//     <View>
//       <Text>Alhamdulillah</Text>
//       <Text>Result of getArray function: {arrayResult}</Text>
//     </View>
//   )
// }



/// 5. Object

// import React from "react";
// import { Text, View } from "react-native";

// export default function App(): JSX.Element {
//   interface Person {
//     name: string;
//     age: number;
//   }
  
//   function getObject(): Person {
//     return { name: "Asif", age: 26 };
//   }
  
//   const objectResult = getObject();

//   return (
//     <View>
//       <Text>Alhamdulillah</Text>
//       <Text>Result of getObject function:</Text>
//       <Text>Name: {objectResult.name}</Text>
//       <Text>Age: {objectResult.age}</Text>
//     </View>
//   );
// }




























////////// Functions that Do Not Return Anything (Void Functions) /////////

// 1. Function that logs a message (returns void):
// const logMessage = (): void => {
//   console.log("This is a log message.");
// };

// logMessage(); // Output: This is a log message.






// 2. Function that increments a counter (returns void):
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterApp(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (): void => {
    setCounter(counter + 1);
    console.log('Counter:', counter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCounter}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
