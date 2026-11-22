// Configuração do login e da nuvem (Supabase).
// Deixe url e key vazios para o app funcionar sem login (só neste aparelho).
// Preencha depois de criar o projeto no Supabase (Project Settings > API).
// A "anon key" é pública por natureza; quem protege os dados é o RLS do supabase.sql.
window.MOTO_CONFIG = {
  url: "https://ghjcupiidwcwdnaxlvuh.supabase.co",
  key: "sb_publishable_a4crOoYPBt7cKrgdfUlh4Q_qdsA5oV9",
  payUrl: "",         // nao usado: o pagamento e criado pela funcao criar-pagamento
  precoTexto: "R$ 11,90 por 30 dias"  // texto mostrado na tela de pagamento (o preco real fica no servidor)
};
