var array = [
  [
      "Ram",
      "21",
      "Male",
      "Doctor"
  ],
  [
      "Mohan",
      "32",
      "Male",
      "Teacher"
  ],
  [
      "Rani",
      "42",
      "Female",
      "Nurse"
  ],
  [
      "Johan",
      "23",
      "Female",
      "Software Engineer"
  ],
  [
      "Shajia",
      "39",
      "Female",
      "Farmer"
  ]
];

$('#table2').DataTable({
data: array,
"pageLength": 3
});