export function converterData(data: string): string {
  const partes = data.split(' ');
  const dataPartes = partes[0].split(':');
  const hora = partes[1];

  const dataFormatada = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]} ${hora}`;

  return dataFormatada;
}
