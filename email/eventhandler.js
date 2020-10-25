import {sendEmail} from 'backend/email';

$w.onReady(function () {
  $w("#dataset1").onAfterSave(sendFormData);
});

function sendFormData() {
  const subject = `New Case From ${$w("#input2").value}`;
  const body = `你好{$name}導師，
    \r我係名師補習中介陳小姐，唔知道你對以下個案有無興趣呢？
    \n個案編號：
    \n補習地點：${$w("#input8").value}
    \n學生年級：${$w("#input4").value}
    \n補習科目：${$w("#input5").value}
    \n每小時時薪：${$w("#dropdown5").value}
    \n每週堂數：${$w("#dropdown1").value}
    \n每堂時數：${$w("#dropdown2").value}
    \n特別要求（如有）: ${$w("#dropdown7").value},${$w("#input9").value}
    \n如果有興趣，請按以下按鈕登記此個案，謝謝你。
    \n即時補習個案：${$w("#input8").value},${$w("#input4").value},${$w("#input5").value},${$w("#dropdown5").value},${$w("#dropdown1").value},${$w("#dropdown2").value}
    \n電話號碼：${$w("#input2").value}
    \r名師補習中介有一份${$w("#input8").value},${$w("#input4").value},${$w("#input5").value},${$w("#dropdown5").value},${$w("#dropdown1").value},${$w("#dropdown2").value}，你有興趣嗎？     （有興趣請到  www.toptutor.hk/caseregister 登記，不用回覆此信息，謝謝）        【個案編號：】`;
      
  sendEmail(subject, body)
    .then(response => console.log(response));
}
