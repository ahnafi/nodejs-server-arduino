// import axios from "axios";
const alamat = "192.168.238.164:80";

const nyalakan = () => {
  //   axios
  //     .post(`http://${alamat}/api/lampu/on`)
  //     .then((response) => {
  //     //   lampuStatus = true;
  //     console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.message);
  //     });

  fetch(`http://${alamat}/api/lampu/on`, {
    method: "POST",
  })
    .then((response) => {
      //   lampuStatus = true;
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};
const matikan = () => {
//   axios
//     .post(`http://${alamat}/api/lampu/off`)
//     .then((response) => {
//       //   lampuStatus = false;
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error("Error:", error.message);
//     });
fetch(`http://${alamat}/api/lampu/off`, {
    method: "POST",
  })
    .then((response) => {
      //   lampuStatus = true;
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

const nyala = document.getElementById("nyala");
const mati = document.getElementById("mati");

nyala.addEventListener("click", () => {
  nyalakan();
});
mati.addEventListener("click", () => {
  matikan();
});
