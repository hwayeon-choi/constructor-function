const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];

function StudentId(id, name) {
  if(typeof(id === "number" && name === "string")) {
    this.id = id;
    this.name = name;
  }
}

const kdtClass = [];
for(let i = 0; i < studentList.length; i++) {
  kdtClass.push(new StudentId(i+1, studentList[i]));
}
// console.log(kdtClass);

kdtClass[24].adress = "Daejeon";
console.log(kdtClass);

const kdtClassNew = [];
for(i = 0; i < studentList.length; i++) {
  if(kdtClass[i].id %2 !== 0 ) {
    kdtClassNew.push(kdtClass[i].name);
  }
}
console.log(kdtClassNew);

const kdtClassKim = [];
for(i = 0; i < studentList.length; i++) {
  if(kdtClass[i].name.includes("김")) {
    // kdtClassKim.push(kdtClass[i].name.replace("김","금"));
    kdtClass[i].name.replace("김", "금");
  } else continue;
}
// console.log(kdtClassKim);
console.log(kdtClass);






// console.log(kdtClass[1].name.includes("김"));

