export function BackgroundTexture() {
  return (
    // position: absolute preenche a tela toda
    // opacity-[0.03] deixa o efeito quase transparente (3% visível)
    // pointer-events-none garante que o fundo não atrapalha o clique nos botões
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Aqui definimos o bloco de textura que vai se repetir (100x100) */}
          <pattern id="cord-texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Estas três linhas (path) desenham as curvas da lã do cordel */}
            <path d="M0 50 Q 25 45, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="2" className="text-amber-900" />
            <path d="M0 55 Q 25 50, 50 55 T 100 55" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-amber-900" />
            <path d="M0 60 Q 25 55, 50 60 T 100 60" stroke="currentColor" fill="none" strokeWidth="1" className="text-amber-900" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cord-texture)" />
      </svg>
    </div>
  );
}