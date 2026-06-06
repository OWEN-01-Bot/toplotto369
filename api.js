async function fetchThaiLottery() {
  try {
    const res = await fetch("https://www.glo.or.th/api/checking/getLotteryResult");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Thai API error", err);
    return null;
  }
}

async function fetchLaoLottery() {
  // เดโม (เพราะไม่มี official free API stable)
  return {
    result: "กำลังเชื่อม API ลาว"
  };
}

async function fetchPowerball() {
  return {
    result: "กำลังเชื่อม Asia Powerball"
  };
}
