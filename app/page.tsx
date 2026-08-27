"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type Category = "Todos" | "Chocolate" | "Brancos" | "Caseiros" | "Doces";

const categories: Category[] = ["Todos", "Chocolate", "Brancos", "Caseiros", "Doces"];

const products = [
  {
    name: "Chocolate com morangos",
    category: "Chocolate" as Category,
    description: "Camadas intensas de chocolate, brigadeiro cremoso e morangos frescos.",
    image: "/images/reys-doces-chocolate.png",
    tag: "Mais pedido",
  },
  {
    name: "Bolo branco com frutas",
    category: "Brancos" as Category,
    description: "Massa leve, creme delicado e frutas vermelhas para celebrar com leveza.",
    image: "/images/reys-doces-frutas.png",
    tag: "Leve e fresco",
  },
  {
    name: "Cenoura com brigadeiro",
    category: "Caseiros" as Category,
    description: "Aquele sabor de casa com cobertura generosa de chocolate brilhante.",
    image: "/images/reys-doces-caseiro.png",
    tag: "Afeto em forma de bolo",
  },
  {
    name: "Caixa de doces finos",
    category: "Doces" as Category,
    description: "Docinhos artesanais para presentear, montar kits e deixar a festa especial.",
    image: "/images/reys-doces-catalogo.png",
    tag: "Para presentear",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [sent, setSent] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const visibleProducts = products.filter(
    (product) => activeCategory === "Todos" || product.category === activeCategory,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className={`site-header${headerScrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Reys Doces, voltar ao início">
          <span className="brand-mark">R</span>
          <span><strong>Reys Doces</strong><small>confeitaria artesanal</small></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#bolos">Bolos</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href="#contato">Fazer pedido <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Feito para adoçar seus momentos</p>
          <h1>Um pedaço de carinho em cada fatia.</h1>
          <p className="hero-text">Bolos, doces e kits de festa preparados artesanalmente para transformar aniversários, encontros e pequenos motivos em grandes celebrações.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#bolos">Conheça nossos sabores</a>
            <a className="text-link" href="#contato">Encomende o seu <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof"><span className="proof-stars" aria-label="5 estrelas">★★★★★</span><span>Receitas com sabor de memória</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob" aria-hidden="true" />
          <div className="hero-image-frame"><Image src="/images/reys-doces-chocolate.png" alt="Bolo de chocolate com brigadeiro e morangos" fill priority sizes="(max-width: 800px) 90vw, 44vw" /></div>
          <div className="floating-note floating-note-top"><span className="note-dot" /><span>feito sob encomenda</span></div>
          <div className="floating-note floating-note-bottom"><strong>100%</strong><span>artesanal</span></div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Diferenciais">
        <div><span className="strip-icon">✦</span><strong>Ingredientes selecionados</strong><span>Mais sabor em cada receita</span></div>
        <div><span className="strip-icon">♡</span><strong>Carinho em cada detalhe</strong><span>Do forno para a sua mesa</span></div>
        <div><span className="strip-icon">✧</span><strong>Para todas as ocasiões</strong><span>Encomendas personalizadas</span></div>
      </section>

      <section className="catalog section" id="bolos">
        <div className="section-heading"><div><p className="eyebrow">Escolha seu favorito</p><h2>Delícias da Reys</h2></div><p>Sabores feitos para compartilhar bons momentos — ou guardar só para você.</p></div>
        <div className="filter-row" role="group" aria-label="Filtrar produtos por categoria">
          {categories.map((category) => <button className={activeCategory === category ? "filter-button active" : "filter-button"} key={category} type="button" onClick={() => setActiveCategory(category)}>{category === "Chocolate" ? "Bolos de chocolate" : category === "Brancos" ? "Bolos brancos" : category === "Caseiros" ? "Bolos caseiros" : category}</button>)}
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => <article className="product-card" key={product.name}>
            <div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 92vw, 25vw" /><span className="product-tag">{product.tag}</span></div>
            <div className="product-content"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p><a href="#contato" className="product-link">Quero encomendar <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-card"><div className="about-image"><Image src="/images/reys-doces-catalogo.png" alt="Seleção de bolos e doces da Reys Doces" fill sizes="(max-width: 800px) 92vw, 42vw" /></div><div className="about-copy"><p className="eyebrow">Sobre a Reys Doces</p><h2>Receitas que chegam com afeto.</h2><p>A Reys Doces nasceu para tornar os momentos simples mais gostosos. Cada bolo é preparado em pequena escala, com atenção ao acabamento, ingredientes escolhidos e aquele toque caseiro que faz diferença.</p><p>Conte para a gente o que você está imaginando. A sua comemoração merece um doce com a sua cara.</p><a className="text-link" href="#contato">Fale com a Reys <span aria-hidden="true">→</span></a></div></div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-copy"><p className="eyebrow">Vamos criar algo delicioso?</p><h2>Faça sua encomenda.</h2><p>Preencha o formulário ou fale diretamente pelas nossas redes. Respondemos com carinho e ajudamos a escolher o melhor sabor para a sua ocasião.</p><div className="social-links"><a href="https://instagram.com/reysdoces" target="_blank" rel="noreferrer"><span className="social-icon">◎</span><span><small>Instagram</small><strong>@reysdoces</strong></span><span className="social-arrow" aria-hidden="true">↗</span></a><a href="#contato"><span className="social-icon">◌</span><span><small>WhatsApp</small><strong>Número de pedidos em configuração</strong></span><span className="social-arrow" aria-hidden="true">↗</span></a></div></div>
        <form className="contact-form" onSubmit={handleSubmit}><label>Seu nome<input name="name" required placeholder="Como podemos te chamar?" /></label><label>O que você deseja?<select name="order" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Bolo de aniversário</option><option>Doces para festa</option><option>Kit presente</option><option>Outro pedido</option></select></label><label>Conte um pouco mais<textarea name="message" rows={4} placeholder="Data, sabor, tamanho ou qualquer detalhe importante..." /></label><button className="button button-dark" type="submit">Enviar pedido <span aria-hidden="true">↗</span></button>{sent && <p className="form-success" role="status">Pedido recebido na demonstração. Em seguida, conectaremos este formulário ao WhatsApp oficial.</p>}</form>
      </section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">R</span><span><strong>Reys Doces</strong><small>Confeitaria artesanal</small></span></div><p>Feito com carinho para adoçar seus dias.</p><div className="footer-links"><a href="#inicio">Voltar ao topo ↑</a><a href="https://instagram.com/reysdoces" target="_blank" rel="noreferrer">Instagram ↗</a></div></footer>
    </main>
  );
}
