const m_a = 'm_A';

function m_fnA() {
  console.log('m_fnA');
}

let a = { m_a, m_fnA, m_a2: m_a };
module.exports = a;
