export default function getDataHoraAtual() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    return `(${dia}${mes}${ano}) ${horas}:${minutos}`
  }