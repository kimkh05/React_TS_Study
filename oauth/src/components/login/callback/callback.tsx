// import { useEffect } from "react";
// import qs from "qs";

// const Callback: React.FC = ({ history, location }) => {
//   const authurl = "백엔드와 협의된 URL";

//   useEffect(() => {
//     const getToken = async () => {
//       const { code } = qs.parse(location.search, {
//         ignoreQueryPrefix: true,
//       });

//       try {
//         const response = await fetch(`${authurl}?code=${code}`);
//         const data = await response.json();

//         localStorage.setItem("token", data.jwt);
//         localStorage.setItem("ProfileURL", data.avatar_url);

//         history.push("/");
//       } catch (error) {}
//     };

//     getToken();
//   }, [location, history, authurl]);

//   return <></>;
// };

// export default Callback;

export {};
