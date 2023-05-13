export const RandomKey = (length = 5) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

// export const startWorkingChart = (chartCanva, callback, getInfo) => {
//   const chart = chartCanva.getContext("2d");
//   const gradient = chart.createLinearGradient(0, 0, 0, 450);
//
//   gradient.addColorStop(0, "#FF7B7D");
//   gradient.addColorStop(0.3, "rgba(255,123,125,0.36)");
//   gradient.addColorStop(1, "rgba(255,123,125,0)");
//
//   let data = {
//     labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"],
//     datasets: [
//       {
//         label: "Сеансы",
//         backgroundColor: gradient,
//         pointBackgroundColor: "#ffffff",
//         borderWidth: 2,
//         borderColor: "#FF7B7D",
//         data: [30, 80, 33, 55, 30, 70, 50],
//         pointColor: "#fff",
//         fill: true,
//       },
//     ],
//   };
//
//   let options = {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             getInfo(context);
//           },
//         },
//       },
//     },
//     animation: {
//       easing: "easeInOutQuad",
//       duration: 520,
//     },
//     interaction: {
//       intersect: false,
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//       },
//     },
//     legend: {
//       display: false,
//     },
//     point: {
//       backgroundColor: "#F36D6F",
//     },
//     tooltips: {
//       titleFontFamily: "Poppins",
//       backgroundColor: "rgba(0,0,0,0.4)",
//       titleFontColor: "white",
//       caretSize: 10,
//       cornerRadius: 10,
//       xPadding: 10,
//       yPadding: 10,
//     },
//   };
//
//   callback(chart, data, options);
// };
