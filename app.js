// const bContFaqList_div = document.querySelector(".b-cont-faq-list");

const fontPlus_div = document.querySelectorAll(".plus");
const fontBOXes_div = document.querySelectorAll(".font-box");
const bCINTFAQLISTSPAN_span = document.querySelectorAll(
  ".b-cont-faq-list-span"
);

fontBOXes_div.forEach((elem) => {
  elem.addEventListener("click", ({ target }) => {
    const Plus = elem.children[0].childNodes[0];

    if (Plus.classList.contains("plus")) {
      Plus.classList.remove("plus");
      Plus.classList.add("add");
      const faqLi_li = elem.parentElement.classList.add("faq-li");
    } else if (Plus.classList.contains("add")) {
      Plus.classList.remove("add");
      Plus.classList.add("plus");
      const faqLi_li = elem.parentElement.classList.remove("faq-li");
    }
  });
});
console.log({ addEventListener });
