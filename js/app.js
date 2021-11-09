const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tipBtns = $(".button__tip");
const inputBill = $("#value");
const inputPercent = $$(".button__tip");
const inputPeople = $("#value_person");
const outputTip = $("#show__tip");
const outputAmount = $("#show__amount");

const app = {
  value: 0,
  button__select__tip: 0,
  value_person: 0,
  show__tip: 0,
  show__amount: 0,

  handleValidateBill: function () {
   
    }
  },
  handleBtnPercent: function () {},
  start: function () {
    this.handleValidateBill();
    this.handleBtnPercent();
  },
};

app.start();
