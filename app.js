async function loadData() {

  const thai = await fetchThaiLottery();
  document.getElementById("thaiData").innerText =
    thai ? JSON.stringify(thai, null, 2) : "โหลดไม่สำเร็จ";

  const lao = await fetchLaoLottery();
  document.getElementById("laoData").innerText = lao.result;

  const apb = await fetchPowerball();
  document.getElementById("apbData").innerText = apb.result;
}

loadData();
