import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected readonly resultCards = [
    {
      value: '+4 a 6 dias',
      label: 'ganho potencial modelado',
      detail: 'quando embalagem, umidade inicial e temperatura apontam para melhora técnica.',
    },
    {
      value: '2x',
      label: 'mais clareza antes do próximo teste',
      detail: 'comparando baseline laboratorial contra cenários what-if priorizados.',
    },
    {
      value: '5 curvas',
      label: 'para ler degradação no tempo',
      detail: 'umidade, firmeza, pH, atividade de água e aceitação proxy.',
    },
  ] as const;

  protected readonly deliverables = [
    {
      title: 'Diagnóstico de shelf-life',
      description:
        'Um estudo objetivo para identificar os fatores que mais pressionam a vida de prateleira.',
      items: ['variáveis críticas', 'curvas por tempo', 'leitura técnica'],
    },
    {
      title: 'Análise laboratorial estruturada',
      description:
        'Planejamento do experimento, vínculo com a empresa contratante e organização das medições reais.',
      items: ['baseline medido', 'lote/amostra', 'limiar técnico'],
    },
    {
      title: 'Simulações de decisão',
      description:
        'Cenários orientados por dados para priorizar alterações de embalagem, umidade e armazenamento.',
      items: ['tende a aumentar', 'tende a reduzir', 'ganho estimado'],
    },
  ] as const;

  protected readonly technicalScopes = [
    {
      title: 'Plano de estudo de vida útil',
      description:
        'Definição do alimento, amostras, tempos de leitura, condições de armazenamento e variáveis críticas antes do laboratório.',
      points: ['produto e lote', 'tempos de coleta', 'critérios de rejeição'],
    },
    {
      title: 'Análises físico-químicas',
      description:
        'Organização das leituras que explicam estabilidade, textura e retenção de qualidade ao longo do tempo.',
      points: ['umidade', 'pH/acidez', 'atividade de água'],
    },
    {
      title: 'Microbiologia e segurança',
      description:
        'Acompanhamento de indicadores microbiológicos com laboratórios parceiros para reduzir incerteza sanitária.',
      points: ['fungos e leveduras', 'contagem total', 'limites técnicos'],
    },
    {
      title: 'Embalagem e armazenamento',
      description:
        'Comparação de barreiras, exposição à luz, temperatura, umidade ambiente e condições logísticas possíveis.',
      points: ['barreira', 'temperatura', 'exposição'],
    },
  ] as const;

  protected readonly shelfLifeFactors = [
    'Matéria-prima e padronização do processo',
    'Umidade, água livre e atividade de água',
    'pH, acidez e estabilidade da formulação',
    'Carga microbiana inicial e boas práticas',
    'Tipo de embalagem, luz e barreira ao oxigênio',
    'Temperatura, umidade e logística de armazenagem',
  ] as const;

  protected readonly qualityServices = [
    {
      title: 'Boas Práticas, POPs e rotina de controle',
      description:
        'Quando o estudo indicar risco operacional, conectamos as recomendações a práticas de produção, planilhas e controles diários.',
    },
    {
      title: 'APPCC e pontos críticos',
      description:
        'A leitura de shelf life pode apoiar a identificação de perigos, pontos críticos e ações preventivas na cadeia produtiva.',
    },
    {
      title: 'Rotulagem, alergênicos e ficha técnica',
      description:
        'O relatório pode levantar impactos técnicos de formulação, embalagem e conservação que precisam conversar com o produto final.',
    },
  ] as const;

  protected readonly process = [
    {
      index: '01',
      title: 'Diagnóstico inicial',
      description:
        'Partimos da empresa, alimento, formulação, embalagem e condições atuais para levantar hipóteses de ganho.',
    },
    {
      index: '02',
      title: 'Plano experimental',
      description:
        'Definimos amostras, tempos de análise, componentes acompanhados e critérios técnicos de interpretação.',
    },
    {
      index: '03',
      title: 'Curvas e simulações',
      description:
        'Transformamos medições e cenários em curvas comparáveis para indicar o que tende a aumentar ou reduzir shelf life.',
    },
    {
      index: '04',
      title: 'Recomendação aplicada',
      description:
        'Entregamos caminhos priorizados para embalagem, formulação, armazenamento, novo teste ou controle de qualidade.',
    },
  ] as const;

  protected readonly proofRows = [
    { metric: 'Umidade', current: '31.2%', simulated: '32.4%', signal: 'melhora' },
    { metric: 'Firmeza D8', current: '7.4 N', simulated: '5.8 N', signal: 'melhora' },
    { metric: 'Shelf life proxy', current: '8 dias', simulated: '12 dias', signal: '+4 dias' },
  ] as const;

  protected readonly trustedBy = [
    'Panificação industrial',
    'P&D de alimentos',
    'Laboratórios parceiros',
    'Embalagens técnicas',
  ] as const;

  protected readonly clients = [
    {
      initials: 'PI',
      name: 'Panificação Industrial',
      segment: 'Pães embalados e massas fermentadas',
    },
    {
      initials: 'LP',
      name: 'Laboratório Parceiro',
      segment: 'Ensaios físico-químicos e microbiologia',
    },
    {
      initials: 'EA',
      name: 'Embalagens Ativas',
      segment: 'Barreiras, filmes e atmosfera modificada',
    },
    {
      initials: 'PD',
      name: 'P&D de Alimentos',
      segment: 'Formulação, qualidade e inovação',
    },
    {
      initials: 'FS',
      name: 'Food Service',
      segment: 'Produtos prontos e congelados',
    },
  ] as const;

  protected readonly pricingPlans = [
    {
      tag: 'entrada',
      name: 'Diagnóstico técnico',
      price: 'R$ 3.900',
      duration: '7 dias úteis',
      outcome: 'Ideal para entender se vale avançar para laboratório.',
      description:
        'Leitura inicial do produto para mapear variáveis críticas e hipóteses de ganho.',
      items: ['reunião técnica de alinhamento', 'curvas simuladas iniciais', 'relatório executivo'],
      featured: false,
    },
    {
      tag: 'mais contratado',
      name: 'Estudo com laboratório',
      price: 'R$ 8.900',
      duration: '15 a 21 dias',
      outcome: 'Melhor escolha para transformar medições reais em decisão.',
      description:
        'Estruturação do experimento, organização das medições reais e análise comparativa.',
      items: ['plano experimental orientado', 'baseline medido por período', 'curvas por componente'],
      featured: true,
    },
    {
      tag: 'completo',
      name: 'Simulação avançada',
      price: 'R$ 14.900',
      duration: 'sob escopo',
      outcome: 'Para priorizar mudanças de embalagem, formulação ou armazenamento.',
      description:
        'Modelagem de cenários what-if para comparar alternativas técnicas antes do próximo teste.',
      items: ['cenários priorizados', 'comparação de alternativas', 'recomendação técnica'],
      featured: false,
    },
  ] as const;
}
