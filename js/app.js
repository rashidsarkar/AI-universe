const loadAiContent = async (btnWork) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const dataList = await response.json();
  const data = dataList.data.tools;

  displayUI(data, btnWork);
  getOut(data);
};
loadAiContent(true);
const showBtn = document.getElementById("showAllbt");
const showBtn2 = document.getElementById("showAllbt2");
const aiContainer = document.getElementById("ai_container");
const displayUI = (data, showAll) => {
  // console.log(data.length);
  let dataa = data;
  if (showAll) {
    dataa = data.slice(0, 6);
  }
  aiContainer.innerHTML = "";
  dataa.forEach((data) => {
    // console.log(data);
    const display = document.createElement("div");
    const featuresContainer = document.getElementById("features_container");

    display.innerHTML = `
  <div class='shadow-lg border-solid border-2 border-indigo-600 p-6'>


  <div class="rounded  flex justify-center">
    <img src="${data?.image}" alt="data Image" class=" rounded-lg">
  </div>
  <div>
    <h2 class="text-2xl font-semibold ">Features</h2>
  </div>
  <div>
    <ol id="${data.id}" class="text-[#585858] text-base list-decimal ml-7">
   

    </ol>
  </div>
  <!-- line  -->
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-11/12 mx-auto">
  <!-- line  -->

  <div class="mb-3">
    <h2 class="text-2xl font-semibold ">${data.name}</h2>

  </div>
  <div class="flex gap-3 items-center">
    <div class="icon_date">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
          stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class=" rounded-lg  items-center flex justify-between w-11/12">
      <p class="text-sm font-semibold" id="dateDisplay">${data.published_in}</p>
      <button  onclick="my_modal_4.showModal(),showDetails(${data.id})"  class="btn btn-active btn-ghost">Details</button>
      

    </div>

  </div>
</div>
`;
    aiContainer.appendChild(display);
  });
  if (dataa.length > 6) {
    showBtn.classList.add("hidden");
  } else {
    showBtn.classList.remove("hidden");
  }
  if (dataa.length > 6) {
    showBtn2.classList.remove("hidden");
  } else {
    showBtn2.classList.add("hidden");
  }
};
function getOut(data) {
  console.log(data);

  data.forEach((data) => {
    const featuresContainer = document.getElementById(data.id);
    const features = data.features;
    features.forEach((data) => {
      const li = document.createElement("li");
      li.innerText = `${data}`;
      featuresContainer.appendChild(li);
    });
  });
}

function btnWork(data) {
  loadAiContent(false);
}
function btnWork2(data) {
  loadAiContent(true);
}

const showDetails = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/0${id}`
  );
  const dataList = await response.json();
  const data = dataList.data;

  const descrip = document.getElementById("descrip");
  const feater = document.querySelector(".feature");

  descrip.innerText = data.description;
  console.log(data);
  const features = data.features;
  console.log(features);
  feater.innerHTML = "";
  for (const key in features) {
    console.log(key);
    const li = document.createElement("li");
    li.innerText = `${features[key].feature_name}`;
    console.log();
    feater.appendChild(li);
  }

  // features.forEach((data) => {
  //   const li = document.createElement("li");
  //   li.innerText = `${data}`;
  //   feater.appendChild(li);
  // });
};
