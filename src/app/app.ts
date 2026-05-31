import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly menuOpen = signal(false);

  protected readonly resultCards = [
    {
      value: '+4 a 6 dias',
      label: 'ganho potencial modelado',
      detail: 'quando embalagem, umidade inicial e temperatura apontam para melhora tecnica.',
    },
    {
      value: '2x',
      label: 'mais clareza antes do proximo teste',
      detail: 'comparando baseline laboratorial contra cenarios what-if priorizados.',
    },
    {
      value: '5 curvas',
      label: 'para ler degradacao no tempo',
      detail: 'umidade, firmeza, pH, atividade de agua e aceitacao proxy.',
    },
  ] as const;

  protected readonly deliverables = [
    {
      title: 'Diagnostico de shelf-life',
      description:
        'Um estudo objetivo para identificar os fatores que mais pressionam a vida de prateleira.',
      items: ['variaveis criticas', 'curvas por tempo', 'leitura tecnica'],
    },
    {
      title: 'Analise laboratorial estruturada',
      description:
        'Planejamento do experimento, vinculo com a empresa contratante e organizacao das medicoes reais.',
      items: ['baseline medido', 'lote/amostra', 'limiar tecnico'],
    },
    {
      title: 'Simulacoes de decisao',
      description:
        'Cenarios orientados por dados para priorizar alteracoes de embalagem, umidade e armazenamento.',
      items: ['tende a aumentar', 'tende a reduzir', 'ganho estimado'],
    },
  ] as const;

  protected readonly process = [
    {
      index: '01',
      title: 'Primeira leitura',
      description:
        'Partimos da empresa, alimento e condicoes atuais para estimar onde esta a maior alavanca tecnica.',
    },
    {
      index: '02',
      title: 'Experimento e curvas',
      description:
        'Quando ha laboratorio, transformamos as medicoes em curvas comparaveis por tempo e componente.',
    },
    {
      index: '03',
      title: 'Decisao priorizada',
      description:
        'Simulamos o que vale testar primeiro e entregamos uma leitura objetiva de impacto esperado.',
    },
  ] as const;

  protected readonly proofRows = [
    { metric: 'Umidade', current: '31.2%', simulated: '32.4%', signal: 'melhora' },
    { metric: 'Firmeza D8', current: '7.4 N', simulated: '5.8 N', signal: 'melhora' },
    { metric: 'Shelf life proxy', current: '8 dias', simulated: '12 dias', signal: '+4 dias' },
  ] as const;

  protected readonly trustedBy = [
    'Panificacao industrial',
    'P&D de alimentos',
    'Laboratorios parceiros',
    'Embalagens tecnicas',
  ] as const;
}
