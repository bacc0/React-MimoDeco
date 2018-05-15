import React from 'react';
import Footer from '../components/common/Footer';
import LogoBrush from '../img/brush-logo.png';




export class MapPage extends React.Component{
    render() {
        return (
                  <div className='container-a'>
                  <div className="group-1 ">
                        <div className="background">
                              <div className="header-map ">
                              <div className="logo-box">
                                    <img src={LogoBrush} alt="commercial" className="LogoBrush" />
                              </div>
                              </div>
                        </div>
                        <div className="foreground">
                              <center>
                              <div className="top-text-map-holder">
                                    <br />
                                    <h2 id="top-text-map" className="u-center-text tomato-text-lg">Areas we cover</h2>
                                    <br />
                              </div>
                              </center>
                              <div className="type-service">
                              <p className="tomato-text"><strong>Central London EC Postcodes - The City</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    EC1 Barbican, Clerkenwell, Finsbury
                                    EC2 Bishopsgate, Liverpool Street, Moorgate
                                    EC3 Fenchurch Street, Tower Hill, Monument, Aldgate
                                    EC4 St Paul's, Fleet Street
                              </p>
                              <br />
                              <p className="tomato-text"><strong>Central London WC Postcodes - The West End</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    WC1 Bloomsbury, High Holborn, Kings Cross, Gray's Inn, New Oxford Street
                                    WC2 Covent Garden, The Strand, Leicester Square, Charing Cross, Aldwych
                              </p>
                              <br />
                              <p className="tomato-text"><strong>E Postcodes - East London</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    E1 Whitechapel, Stepney, Spitalfields, Shadwell, Stepney, Wapping
                                    E2 Shoreditch, Bethnal Green, Haggerston
                                    E3 Bow, Bromley-by-Bow, Three Mills, Mile End, Old Ford
                                    E4 Chingford, Highams Park Sewardstone
                                    E5 Clapton, Upper Clapton, Lower Clapton
                                    E6 East Ham, Beckton
                                    E7 Forest Gate, Upton Park
                                    E8 Hackney, Dalston, London Fields
                                    E9 Homerton, Hackney Wick, Hackney Marshes, South Hackney
                                    E10 Leyton, Temple Mills, Walthamstow Marshes
                                    E11 Leytonstone, Wanstead, Snaresbrook
                                    E12 Manor Park, Little Ilford, Aldersbrook
                                    E13 Plaistow
                                    E14 Docklands, Canary Wharf, Isle of Dogs, Limehouse, Blackwall
                                    E15 Stratford, West Ham, Maryland
                                    E16 Canning Town, North Woolwich, Silvertown, London City Airport
                                    E17 Walthamstow
                                    E18 Woodford, South Woodford
                              </p>
                              <br />
                              <p className="tomato-text"><strong>SE Postcodes - South East London</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    SE1 Waterloo, South Bank, Southwark, Borough, Bermondsey
                                    SE2 Abbey Wood, West Heath, Crossness
                                    SE3 Blackheath, Westcombe Park, Kidbrooke
                                    SE4 Brockley, Crofton Park, Honor Oak Park
                                    SE5 Camberwell, Denmark Hill
                                    SE6 Catford, Hither Green, Bellingham
                                    SE7 Charlton
                                    SE8 Deptford, Evelyn
                                    SE9 Eltham, Mottingham New Eltham
                                    SE10 Greenwich
                                    SE11 Kennington, Lambeth
                                    SE12 Lee, Grove Park, Chinbrook, Horn Park
                                    SE13 Lewisham, Hither Green, Ladywell
                                    SE14 New Cross, New Cross Gate
                                    SE15 Peckham, Nunhead
                                    SE16 Rotherhithe, Surrey Quays, South Bermondsey
                                    SE17 Walworth, Elephant & Castle, Newington
                                    SE18 Woolwich, Plumstead
                                    SE19 Crystal Palace, Upper Norwood
                                    SE20 Penge, Anerley
                                    SE21 Dulwich, Dulwich Village, West Dulwich
                                    SE22 East Dulwich, Peckham Rye
                                    SE23 Forest Hill, Honor Oak
                                    SE24 Herne Hill
                                    SE25 South Norwood, Selhurst
                                    SE26 Sydenham
                                    SE27 West Norwood, Gipsy Hill, Tulse Hill
                                    SE28 Thamesmead
                              </p>
                              <br />
                              <p className="tomato-text"><strong>SW Postcodes - South West London</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    SW1 Westminster, Belgravia, Pimlico, Knightsbridge, St. James's
                                    SW2 Brixton, Streatham Hill, Brixton Hill
                                    SW3 Chelsea, Brompton, Knightsbridge
                                    SW4 Clapham
                                    SW5 Earls Court
                                    SW6 Fulham, Parson's Green
                                    SW7 South Kensington
                                    SW8 Nine Elms, Vauxhall, South Lambeth
                                    SW9 Stockwell, Brixton
                                    SW10 West Brompton, Chelsea
                                    SW11 Battersea, Clapham Junction
                                    SW12 Balham, Clapham South
                                    SW13 Barnes
                                    SW14 Mortlake, East Sheen
                                    SW15 Putney, Roehampton
                                    SW16 Streatham, Norbury
                                    SW17 Tooting, Tooting Bec
                                    SW18 Wandsworth, Earlsfield
                                    SW19 Wimbledon, Southfields, Merton
                                    SW20 Raynes Park, South Wimbledon
                              </p>
                              <br />
                              <p className="tomato-text"><strong>W Postcodes - West London District or Area</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    W1 Mayfair, Soho, China Town, Marylebone, Fitzrovia, Harley Street
                                    W2 Bayswater, Paddington, Hyde Park
                                    W3 Acton, Park Royal, East Acton, West Acton
                                    W4 Chiswick, Turnham Green, Gunnersby
                                    W5 Ealing
                                    W6 Hammersmith
                                    W7 Hanwell
                                    W8 Kensington
                                    W9 Maida Vale, Little Venice
                                    W10 Ladbroke Grove, North Kensington
                                    W11 Notting Hill, Holland Park
                                    W12 Shepherd's Bush, White City
                                    W13 West Ealing
                                    W14 West Kensington, Kensington Olympia
                              </p>
                              <br />
                              <p className="tomato-text"><strong>NW Postcodes - North West London</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    NW1 Camden Town, Euston, Somers Town, Regent's Park
                                    NW2 Cricklewood, Dollis Hill, Childs Hill, Neasden
                                    NW3 Hampstead, Swiss Cottage, Belsize Park, Chalk Farm
                                    NW4 Hendon, Brent Cross
                                    NW5 Kentish Town, Tufnell Park, Gospel Oak
                                    NW6 West Hampstead, Kilburn, Queen's Park, Brondesbury
                                    NW7 Mill Hill, Arkley
                                    NW8 St John's Wood, Primrose Hill, Lisson Grove
                                    NW9 Kingsbury, Colindale, West Hendon, Queensbury, The Hyde
                                    NW10 Willesden, Harlesden, Kensal Green, Stonebridge, Brent Park
                                    NW11 Golders Green, Hampstead Garden Suburb
                              </p>
                              <br />
                              <p className="tomato-text"><strong>N Postcodes - North London</strong></p>
                              <br />
                              <p className="grey-text-sm">
                                    N1 Islington, Kings Cross, Canonbury, Barnsbury, Pentonville, Hoxton
                                    N2 East Finchley, Fortis Green
                                    N3 Finchley, Finchley Central, Church End
                                    N4 Finsbury Park, Manor House, Harringay, Stroud Green
                                    N5 Highbury
                                    N6 Highgate, Hampstead Heath
                                    N7 Holloway
                                    N8 Hornsey, Crouch End
                                    N9 Lower Edmonton
                                    N10 Muswell Hill
                                    N11 New Southgate, Friern Barnet, Arnos Grove, Bounds Green
                                    N12 North Finchley, Woodside Park
                                    N13 Palmers Green
                                    N14 Southgate, Oakwood
                                    N15 Seven Sisters, West Green
                                    N16 Stoke Newington, Stamford Hill, Shacklewell, Dalston
                                    N17 Tottenham, Tottenham South
                                    N18 Upper Edmonton
                                    N19 Upper Holloway, Archway, Tufnell Park
                                    N20 Whetstone, Totteridge, Oakleigh Park
                                    N21 Winchmore Hill, Bush Hill, Grange Park
                                    N22 Wood Green, Alexandra Palace, Bowes Green
                              </p>
                              </div>
                              <div className="footer-separator-quote-map" ></div>
                              <Footer />
                        </div>
                  </div>
                  </div>
        );
    }
}

export default MapPage;