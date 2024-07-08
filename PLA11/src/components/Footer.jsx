const Footer = () => {
  return (
    // TODO #2
    // Podem eliminar l'etiqueta footer i simplement retornar els dos paràgrafs?
    // Si
    // Quina precaució hauríem de tenir si volguéssim fer-ho? (Pista: React.Fragment)
    // Hem de tenir en compte que React.Fragment no afegeix cap node addicional al DOM, però ens permet agrupar una llista de fills sense afegir elements extra.
    <>
      <p>Instapicsum by CIFO L'Hospitalet</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis necessitatibus aut aliquam at,
        exercitationem voluptas voluptates nihil doloremque deserunt, nesciunt eius expedita dolor quia pariatur fugit
        beatae? Necessitatibus, beatae.
      </p>
    </>
  )
}

export default Footer
