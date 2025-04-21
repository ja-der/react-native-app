// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList } from "react-native";

// type Instrument = {
//   id: number;
//   name: string;
// };

// const Testing = () => {
//   const [instruments, setInstruments] = useState<Instrument[]>([]);

//   useEffect(() => {
//     fetchInstruments();
//   }, []);

//   const fetchInstruments = async () => {
//     const { data, error } = await supabase.from("instruments").select("*");
//     if (error) {
//       console.error("Error fetching instruments:", error);
//     } else {
//       setInstruments(data);
//     }
//   };

//   return (
//     <View>r
//       <FlatList
//         data={instruments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <Text>{item.name}</Text>}
//       />
//     </View>
//   );
// };

// export default Testing;
