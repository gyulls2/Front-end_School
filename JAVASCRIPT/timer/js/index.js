// Input 숫자 포맷 변경
function leadingZeros(input) {
  if (!isNaN(input.value) && input.value.length === 1) {
    input.value = "0" + input.value;
  }

  if (input.value.length > 2) {
    input.value = input.value.substr(-1, 2);
  }
}
