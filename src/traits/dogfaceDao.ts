import { ITrait } from "../common/interfaces";

// export const dogfaceDaoTraits: ITrait[] = [
//   {
//     name: "background",
//     description: "The background of the dog's face",
//     level: 0,
//     items: [
//       {
//         name: "bg-1",
//         description: "",
//         inscriptionId:
//           "860e3990932af10f67e500ba68be22bf9db74ae526227be89d43c23b4501cfc1i0",
//         mode: "PERCENTAGE",
//         value: 100,
//       },
//       {
//         name: "bg-2",
//         description: "",
//         inscriptionId:
//           "39e4ea4a9754f7062161fff49eff92bd91ca8b963a17831335ab76c83af66547i0",
//         mode: "PERCENTAGE",
//         value: 0,
//       },
//     ],
//   },
//   {
//     name: "face",
//     description: "dog's face",
//     level: 1,
//     items: [
//       {
//         name: "face-1",
//         description: "",
//         inscriptionId:
//           "8bcc61e0d4e306a3a12297c3462cbeaf4fae2dda117e8661a97fd53bd52277c7i0",
//         mode: "PERCENTAGE",
//         value: 15,
//       },
//       {
//         name: "face-2",
//         description: "",
//         inscriptionId:
//           "6c31fdf8db6010e1344f0739effe68b644891edebd61634487eeb0aa7046c011i0",
//         mode: "PERCENTAGE",
//         value: 22,
//       },
//       {
//         name: "face-3",
//         description: "",
//         inscriptionId:
//           "866b84ec1fd01dba8675271feeab33547c9cdef35fbb9f8c9266947d603e2701i0",
//         mode: "PERCENTAGE",
//         value: 26,
//       },
//       {
//         name: "face-4",
//         description: "",
//         inscriptionId:
//           "b3be6b51ac4c5807c44865918a8fd2a2e3ca53c33efbeda90097c93606744c26i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "face-5",
//         description: "",
//         inscriptionId:
//           "423d56ec667f61063c6856bc45017f3f15e000be8e580798daf45857b930de89i0",
//         mode: "PERCENTAGE",
//         value: 9,
//       },
//       {
//         name: "face-6",
//         description: "",
//         inscriptionId:
//           "f09b91c39010404a591846bad8e25a7108b784bf2e9b0bce42d18cab3473ee31i0",
//         mode: "PERCENTAGE",
//         value: 6,
//       },
//       {
//         name: "face-7",
//         description: "",
//         inscriptionId:
//           "98c1ff5bc1b38500572d604478cc204b393b9e3ca66ccd3db4189c232d21954ci0",
//         mode: "PERCENTAGE",
//         value: 4,
//       },
//       {
//         name: "face-8",
//         description: "",
//         inscriptionId:
//           "c1bde31f7a3c97eb9e688f28bd7a5f0722ab169368595681ef0270709f21fe62i0",
//         mode: "PERCENTAGE",
//         value: 3,
//       },
//       {
//         name: "face-9",
//         description: "",
//         inscriptionId:
//           "f0cd7bb231453ebe9388a86d33d1d69f36629df51608655fa296a1cd718aa6d0i0",
//         mode: "PERCENTAGE",
//         value: 2,
//       },
//       {
//         name: "face-10",
//         description: "",
//         inscriptionId:
//           "85485f48404d1876f2f2e62105049b97c358478d12d8e3dceb9ad55f9ac25291i0",
//         mode: "PERCENTAGE",
//         value: 2,
//       },
//     ],
//   },
//   {
//     name: "clothes",
//     description: "dog's face",
//     level: 2,
//     items: [
//       {
//         name: "clothes-1",
//         description: "",
//         inscriptionId:
//           "b1a7e543f4d0f42432461df21a109c6747d4ae88005643e8a05a1bcd6abf7bbbi0",
//         mode: "PERCENTAGE",
//         value: 9,
//       },
//       {
//         name: "clothes-2",
//         description: "",
//         inscriptionId:
//           "ab6390c83f06d373bc22cb9976e00226049cd7a46bc61ea84a777bc0a63f4d56i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "clothes-3",
//         description: "",
//         inscriptionId:
//           "475c1d98f34abef1e72ca098d21c02b57a8f277ee73ebdb6f260752a785a4de6i0",
//         mode: "PERCENTAGE",
//         value: 8,
//       },
//       {
//         name: "clothes-4",
//         description: "",
//         inscriptionId:
//           "5f0f8a7276af5364f959f67d2fd32bca187c9e938199f0f220daee8d1a140d80i0",
//         mode: "PERCENTAGE",
//         value: 6,
//       },
//       {
//         name: "clothes-5",
//         description: "",
//         inscriptionId:
//           "623eb90362a4d60bce9ab12db33109c846603f55d6ecfd047cfe96288b967094i0",
//         mode: "PERCENTAGE",
//         value: 7,
//       },
//       {
//         name: "clothes-6",
//         description: "",
//         inscriptionId:
//           "e692a52e234a0d91f68f6d90b72ca34ded254c5d62ff83bcaa6ed170b40f5a49i0",
//         mode: "PERCENTAGE",
//         value: 4,
//       },
//       {
//         name: "clothes-7",
//         description: "",
//         inscriptionId:
//           "135f8a24c720a4286ef86087013a42ead30eda8f47fb43cd83180c0130bb0a76i0",
//         mode: "PERCENTAGE",
//         value: 5,
//       },
//       {
//         name: "clothes-8",
//         description: "",
//         inscriptionId:
//           "c16e1b4c5c1d67538e3f3ea85cabb8c68e1f41f9bf39bc732491c53f563b0691i0",
//         mode: "PERCENTAGE",
//         value: 3,
//       },
//       {
//         name: "clothes-9",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 48,
//       },
//     ],
//   },
//   {
//     name: "eyes",
//     description: "dog's face",
//     level: 3,
//     items: [
//       {
//         name: "eyes-1",
//         description: "",
//         inscriptionId:
//           "9fb90b76cf7d1192874411853529c7f459adfdfdd1ed7e7fb4f24a2830a3352bi0",
//         mode: "PERCENTAGE",
//         value: 15,
//       },
//       {
//         name: "eyes-2",
//         description: "",
//         inscriptionId:
//           "8c8b5fd55dc23b6938eb7c8d2658217f619c56e65276c313da8e23aebd2ba86fi0",
//         mode: "PERCENTAGE",
//         value: 19,
//       },
//       {
//         name: "eyes-3",
//         description: "",
//         inscriptionId:
//           "0b5b74f125ea6ee743296903704c102f992191bb90535146961e967a2d724073i0",
//         mode: "PERCENTAGE",
//         value: 9,
//       },
//       {
//         name: "eyes-4",
//         description: "",
//         inscriptionId:
//           "f7df515f76b4a34267dcf15f26ae3c6b1c4d1e7686b161f48de0b4b60ec0418ci0",
//         mode: "PERCENTAGE",
//         value: 5,
//       },

//       {
//         name: "eyes-5",
//         description: "",
//         inscriptionId:
//           "ec086215147767faab569d003180c6e2183c04dccfbf6d3618cb7d43bead28aai0",
//         mode: "PERCENTAGE",
//         value: 5,
//       },
//       {
//         name: "eyes-6",
//         description: "",
//         inscriptionId:
//           "3009b70ace9cfbc84c143e4f85b86da569fe3f4c23f0688f15f2ff50f8834367i0",
//         mode: "PERCENTAGE",
//         value: 5,
//       },
//       {
//         name: "eyes-7",
//         description: "",
//         inscriptionId:
//           "926a35f49c93f1c6386d86b2a1b1e2b4b3ba7a431f432f04014a407f4e3afe44i0",
//         mode: "PERCENTAGE",
//         value: 4,
//       },
//       {
//         name: "eyes-8",
//         description: "",
//         inscriptionId:
//           "bb302cd07525c108d9cb98547af64efeb567b1a627d1e75c63c6f59540cee8a5i0",
//         mode: "PERCENTAGE",
//         value: 3,
//       },
//       {
//         name: "eyes-9",
//         description: "",
//         inscriptionId:
//           "09352d878a475ca514a9e084b0af0327fc610f7fa5ca52f42d5e4b75a62e7b93i0",
//         mode: "PERCENTAGE",
//         value: 5,
//       },
//       {
//         name: "eyes-10",
//         description: "",
//         inscriptionId:
//           "0a1f000f728f2c8fa3ed3947bcb1c0861aaabdb0529e36f36383bb2c895e935di0",
//         mode: "PERCENTAGE",
//         value: 30,
//       },
//     ],
//   },
//   {
//     name: "head",
//     description: "dog's face",
//     level: 4,
//     items: [
//       {
//         name: "head-1",
//         description: "",
//         inscriptionId:
//           "d3340f7d3fc6eef388dcb00b47aa8c26536a41f6b01b26b577b20c7b28401b41i0",
//         mode: "PERCENTAGE",
//         value: 12,
//       },
//       {
//         name: "head-2",
//         description: "",
//         inscriptionId:
//           "fc4e6867f9e5d68d5a6450b5985349ac7ed85614899f295bd46da72a44dc2f0fi0",
//         mode: "PERCENTAGE",
//         value: 14,
//       },
//       {
//         name: "head-3",
//         description: "",
//         inscriptionId:
//           "83f50517d65d8c6d76098cfd84751966084c0db0fbaf49c8801a8126d025494bi0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "head-4",
//         description: "",
//         inscriptionId:
//           "0c2a8d2939875b15d6e7569d75641782af4db2abfd618c433fda481d2bc4f0edi0",
//         mode: "PERCENTAGE",
//         value: 12,
//       },
//       {
//         name: "head-5",
//         description: "",
//         inscriptionId:
//           "98822765cb55057fef3734d8531ba6f161e3169f33b51d3bbb2fc700a40a3a7bi0",
//         mode: "PERCENTAGE",
//         value: 8,
//       },
//       {
//         name: "head-6",
//         description: "",
//         inscriptionId:
//           "9c6d89855be2a73bedeeecaddb0cc7f7917d0c197a3fc048a6c510c2941111afi0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "head-7",
//         description: "",
//         inscriptionId:
//           "228041e06e958b65c8ea8612c6b752813b183d46ad107e956a4b08003c25c32bi0",
//         mode: "PERCENTAGE",
//         value: 3,
//       },
//       {
//         name: "head-8",
//         description: "",
//         inscriptionId:
//           "69f10fcf965272ecdd5894773a9cf9dc48187088693fd12a98583078c4c9cc7bi0",
//         mode: "PERCENTAGE",
//         value: 2,
//       },
//       {
//         name: "head-9",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 29,
//       },
//     ],
//   },
//   {
//     name: "mouth",
//     description: "dog's face",
//     level: 6,
//     items: [
//       {
//         name: "mouth-1",
//         description: "",
//         inscriptionId:
//           "14ba8151969b0241049cbebf9b163b7bf0b0bd6d6716a39ec22b50b7fc9319b2i0",
//         mode: "PERCENTAGE",
//         value: 3,
//       },
//       {
//         name: "mouth-2",
//         description: "",
//         inscriptionId:
//           "e678a59a9ca76dd22226d356538c87a6452a04d0bb9d89cc308797cf15bd2501i0",
//         mode: "PERCENTAGE",
//         value: 6,
//       },
//       {
//         name: "mouth-3",
//         description: "",
//         inscriptionId:
//           "6f58cee52067423d41b14d93732237210f65df643ec02287208c40526141319bi0",
//         mode: "PERCENTAGE",
//         value: 7,
//       },
//       {
//         name: "mouth-4",
//         description: "",
//         inscriptionId:
//           "52d1e9f4b2876de4eed391056b54c2cbc13c9d7f74cd46c0a0f8614167ded61ci0",
//         mode: "PERCENTAGE",
//         value: 4,
//       },
//       {
//         name: "mouth-5",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 80,
//       },
//     ],
//   },
//   {
//     name: "neck",
//     description: "dog's face",
//     level: 5,
//     items: [
//       {
//         name: "neck-1",
//         description: "",
//         inscriptionId:
//           "a205bf72fe0d5b9bc11647de867c06d443ff42e428ec7b4c9352b51fc85ec50ai0",
//         mode: "PERCENTAGE",
//         value: 8,
//       },
//       {
//         name: "neck-2",
//         description: "",
//         inscriptionId:
//           "147dba8cd9ed3c9e2ca0da262a1d0b8d8ad88094b8b6c02e8275793c5f41cec1i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "neck-3",
//         description: "",
//         inscriptionId:
//           "04fd5edc7209237ac945ac84b8ca9f59024fe33aea971f786fd2f4807e8033ebi0",
//         mode: "PERCENTAGE",
//         value: 4,
//       },
//       {
//         name: "neck-4",
//         description: "",
//         inscriptionId:
//           "359a2068a790ef79ba7a62a1b55127e01c43d41826ef926d11dcfc0d3ec273e9i0",
//         mode: "PERCENTAGE",
//         value: 5,
//       },
//       {
//         name: "neck-5",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 73,
//       },
//     ],
//   },
// ];

// export const dogfaceDaoTraitsEqualDistribution: ITrait[] = [
//   // {
//   //   name: "background",
//   //   description: "The background of the dog's face",
//   //   level: 0,
//   //   items: [
//   //     {
//   //       name: "bg-1",
//   //       description: "",
//   //       inscriptionId:
//   //         "860e3990932af10f67e500ba68be22bf9db74ae526227be89d43c23b4501cfc1i0",
//   //       mode: "PERCENTAGE",
//   //       value: 100,
//   //     },
//   //   ],
//   // },
//   {
//     name: "face",
//     description: "dog's face",
//     level: 1,
//     items: [
//       {
//         name: "face-1",
//         description: "",
//         inscriptionId:
//           "8bcc61e0d4e306a3a12297c3462cbeaf4fae2dda117e8661a97fd53bd52277c7i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-2",
//         description: "",
//         inscriptionId:
//           "6c31fdf8db6010e1344f0739effe68b644891edebd61634487eeb0aa7046c011i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-3",
//         description: "",
//         inscriptionId:
//           "866b84ec1fd01dba8675271feeab33547c9cdef35fbb9f8c9266947d603e2701i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-4",
//         description: "",
//         inscriptionId:
//           "b3be6b51ac4c5807c44865918a8fd2a2e3ca53c33efbeda90097c93606744c26i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-5",
//         description: "",
//         inscriptionId:
//           "423d56ec667f61063c6856bc45017f3f15e000be8e580798daf45857b930de89i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-6",
//         description: "",
//         inscriptionId:
//           "f09b91c39010404a591846bad8e25a7108b784bf2e9b0bce42d18cab3473ee31i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-7",
//         description: "",
//         inscriptionId:
//           "98c1ff5bc1b38500572d604478cc204b393b9e3ca66ccd3db4189c232d21954ci0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-8",
//         description: "",
//         inscriptionId:
//           "c1bde31f7a3c97eb9e688f28bd7a5f0722ab169368595681ef0270709f21fe62i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-9",
//         description: "",
//         inscriptionId:
//           "f0cd7bb231453ebe9388a86d33d1d69f36629df51608655fa296a1cd718aa6d0i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "face-10",
//         description: "",
//         inscriptionId:
//           "85485f48404d1876f2f2e62105049b97c358478d12d8e3dceb9ad55f9ac25291i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//     ],
//   },
//   {
//     name: "clothes",
//     description: "dog's face",
//     level: 2,
//     items: [
//       {
//         name: "clothes-1",
//         description: "",
//         inscriptionId:
//           "b1a7e543f4d0f42432461df21a109c6747d4ae88005643e8a05a1bcd6abf7bbbi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-2",
//         description: "",
//         inscriptionId:
//           "ab6390c83f06d373bc22cb9976e00226049cd7a46bc61ea84a777bc0a63f4d56i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-3",
//         description: "",
//         inscriptionId:
//           "475c1d98f34abef1e72ca098d21c02b57a8f277ee73ebdb6f260752a785a4de6i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-4",
//         description: "",
//         inscriptionId:
//           "5f0f8a7276af5364f959f67d2fd32bca187c9e938199f0f220daee8d1a140d80i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-5",
//         description: "",
//         inscriptionId:
//           "623eb90362a4d60bce9ab12db33109c846603f55d6ecfd047cfe96288b967094i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-6",
//         description: "",
//         inscriptionId:
//           "e692a52e234a0d91f68f6d90b72ca34ded254c5d62ff83bcaa6ed170b40f5a49i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-7",
//         description: "",
//         inscriptionId:
//           "135f8a24c720a4286ef86087013a42ead30eda8f47fb43cd83180c0130bb0a76i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-8",
//         description: "",
//         inscriptionId:
//           "c16e1b4c5c1d67538e3f3ea85cabb8c68e1f41f9bf39bc732491c53f563b0691i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "clothes-9",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 12,
//       },
//     ],
//   },
//   {
//     name: "eyes",
//     description: "dog's face",
//     level: 3,
//     items: [
//       {
//         name: "eyes-1",
//         description: "",
//         inscriptionId:
//           "9fb90b76cf7d1192874411853529c7f459adfdfdd1ed7e7fb4f24a2830a3352bi0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-2",
//         description: "",
//         inscriptionId:
//           "8c8b5fd55dc23b6938eb7c8d2658217f619c56e65276c313da8e23aebd2ba86fi0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-3",
//         description: "",
//         inscriptionId:
//           "0b5b74f125ea6ee743296903704c102f992191bb90535146961e967a2d724073i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-4",
//         description: "",
//         inscriptionId:
//           "f7df515f76b4a34267dcf15f26ae3c6b1c4d1e7686b161f48de0b4b60ec0418ci0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },

//       {
//         name: "eyes-5",
//         description: "",
//         inscriptionId:
//           "ec086215147767faab569d003180c6e2183c04dccfbf6d3618cb7d43bead28aai0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-6",
//         description: "",
//         inscriptionId:
//           "3009b70ace9cfbc84c143e4f85b86da569fe3f4c23f0688f15f2ff50f8834367i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-7",
//         description: "",
//         inscriptionId:
//           "926a35f49c93f1c6386d86b2a1b1e2b4b3ba7a431f432f04014a407f4e3afe44i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-8",
//         description: "",
//         inscriptionId:
//           "bb302cd07525c108d9cb98547af64efeb567b1a627d1e75c63c6f59540cee8a5i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-9",
//         description: "",
//         inscriptionId:
//           "09352d878a475ca514a9e084b0af0327fc610f7fa5ca52f42d5e4b75a62e7b93i0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//       {
//         name: "eyes-10",
//         description: "",
//         inscriptionId:
//           "0a1f000f728f2c8fa3ed3947bcb1c0861aaabdb0529e36f36383bb2c895e935di0",
//         mode: "PERCENTAGE",
//         value: 10,
//       },
//     ],
//   },
//   {
//     name: "head",
//     description: "dog's face",
//     level: 4,
//     items: [
//       {
//         name: "head-1",
//         description: "",
//         inscriptionId:
//           "d3340f7d3fc6eef388dcb00b47aa8c26536a41f6b01b26b577b20c7b28401b41i0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-2",
//         description: "",
//         inscriptionId:
//           "fc4e6867f9e5d68d5a6450b5985349ac7ed85614899f295bd46da72a44dc2f0fi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-3",
//         description: "",
//         inscriptionId:
//           "83f50517d65d8c6d76098cfd84751966084c0db0fbaf49c8801a8126d025494bi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-4",
//         description: "",
//         inscriptionId:
//           "0c2a8d2939875b15d6e7569d75641782af4db2abfd618c433fda481d2bc4f0edi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-5",
//         description: "",
//         inscriptionId:
//           "98822765cb55057fef3734d8531ba6f161e3169f33b51d3bbb2fc700a40a3a7bi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-6",
//         description: "",
//         inscriptionId:
//           "9c6d89855be2a73bedeeecaddb0cc7f7917d0c197a3fc048a6c510c2941111afi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-7",
//         description: "",
//         inscriptionId:
//           "228041e06e958b65c8ea8612c6b752813b183d46ad107e956a4b08003c25c32bi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-8",
//         description: "",
//         inscriptionId:
//           "69f10fcf965272ecdd5894773a9cf9dc48187088693fd12a98583078c4c9cc7bi0",
//         mode: "PERCENTAGE",
//         value: 11,
//       },
//       {
//         name: "head-9",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 12,
//       },
//     ],
//   },
//   {
//     name: "mouth",
//     description: "dog's face",
//     level: 6,
//     items: [
//       {
//         name: "mouth-1",
//         description: "",
//         inscriptionId:
//           "14ba8151969b0241049cbebf9b163b7bf0b0bd6d6716a39ec22b50b7fc9319b2i0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "mouth-2",
//         description: "",
//         inscriptionId:
//           "e678a59a9ca76dd22226d356538c87a6452a04d0bb9d89cc308797cf15bd2501i0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "mouth-3",
//         description: "",
//         inscriptionId:
//           "6f58cee52067423d41b14d93732237210f65df643ec02287208c40526141319bi0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "mouth-4",
//         description: "",
//         inscriptionId:
//           "52d1e9f4b2876de4eed391056b54c2cbc13c9d7f74cd46c0a0f8614167ded61ci0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "mouth-5",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//     ],
//   },
//   {
//     name: "neck",
//     description: "dog's face",
//     level: 5,
//     items: [
//       {
//         name: "neck-1",
//         description: "",
//         inscriptionId:
//           "a205bf72fe0d5b9bc11647de867c06d443ff42e428ec7b4c9352b51fc85ec50ai0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "neck-2",
//         description: "",
//         inscriptionId:
//           "147dba8cd9ed3c9e2ca0da262a1d0b8d8ad88094b8b6c02e8275793c5f41cec1i0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "neck-3",
//         description: "",
//         inscriptionId:
//           "04fd5edc7209237ac945ac84b8ca9f59024fe33aea971f786fd2f4807e8033ebi0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "neck-4",
//         description: "",
//         inscriptionId:
//           "359a2068a790ef79ba7a62a1b55127e01c43d41826ef926d11dcfc0d3ec273e9i0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//       {
//         name: "neck-5",
//         description: "",
//         inscriptionId:
//           "5c2c653f50da0ae7a0ea6173e445a42e83f481c1b0cd2bbcd2a3bc0fe8d594b1i0",
//         mode: "PERCENTAGE",
//         value: 20,
//       },
//     ],
//   },
// ];
