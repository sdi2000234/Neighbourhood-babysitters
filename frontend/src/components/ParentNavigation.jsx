import React from 'react'
import './ParentNavigation.css'
/* import ParentHome from '../../pages/ParentHome'
import ParentFindProfessional from '../../pages/ParentFindProfessional'
import ParentHireProfessional from '../../pages/ParentHireProfessional'
import ParentContract from '../../pages/ParentContract'
import ParentHistory from '../../pages/ParentHistory'
import ParentProfile from '../../pages/ParentProfile' */


function ParentNavigation()
{
	const userPfp = ""; //user's Pfp src

	return 	(
        <div>
    		<div className="navBar">
                <nav>
                    <img className="logo" alt="logo" src="https://lh3.googleusercontent.com/fife/ALs6j_FaEy6C1j0TetSbqNNbw4XX2mXsNrxVJ0TmosbOFnvTiq-pkSVAceort2rgEguBUrcnYwxrvdVpnznji9SA1_-EDW1flMOa_U4kjHemxNelepzOfxO1-xJAC_ewUw1e4RV84mnh9koUqgTtXZhbHpMEcBx3Ond5v9mbq5KxY8HI2-ZjRpn9RniJCSbnV751nrkwR69w8Qzk96NXgqL6qg1dQpkSVeMDFheGspY2imLV408zl3J8a5oEtVB_u171tZZghx6HgUGOtOKLwpIOb2xzdY8Zdi74SwYmvXQtRwJGoVLYMvyMg1oDjioWikclO3H-pzUpZD-mN4pkyoU9Hc5hYpPmIVKq0IdyAv5mlw4fL36_six2r3nifrz3uViLyKy7OExBWDbZcK9F0OkpH9rfqaaKmRu3Pr4UbdC0vY3HmcF6PdD_mNsB4HSQDRXUu75jsj57wYL81tHaB9cKAiuMpi69KYmufesfIpUVKFs3nFPX85wjfgGo4Kyi68c4yweR3rz6_gADeDoMjz4Em93-Otlb7JFM20zvK49Q83lIP4XcgQLxIR6pr1yYsm9wrf1WvIfuR6gaZWOjpf-j-1QqBWZwtEGUBIK3sDhYnTsnbDB0ABlDzertC7IzGSiIsbOeKet3GgmMEAVp089aRo061DqAnYK7gR2-dmKk40RoHhY1AIDTKX61FKaqqWg0A27bjGURPhnrfkU6UiYMzaDHluEhd0RBlm30T0hkADwjssPER_QCwzeDsOvPNkqOrKWQvfp2LsuFuQgDcg674hZuIxlSTYusDzs1RF1yofE0Xe5nr8AtayvwIXiLtXT7ymfl360wgXpFWAK62Xgd8JC-ITV4ELOd96bP86N_gKKWzK-pfdutas3zIh8NE-ybGlpw-aLhPQ9QHz4K7JjGsJmKjoRcRMRfKq_6bzwXVOScng2oXj4gDQvrGA6Rwg5sSYj5_otGVKctj7R1g4S7zjph_igb3FxTZcMD7x9_w-dH2E_oAs1okkcXT4SkHIao7slyjuxRLnU0zPPlMNHsuquRi2anpGznnfRBQUV9aGWC36qvqEU_UclAMU5HUlT_Y-Sb9gopaOH1TrszIMAvSbWx8wmjnFwEevVI5u0fS9l2uE4BQDOAeznScgjArgTE83Tk9JdT_t28eticGntmvyAmPsxTuvwuIUW1NsvXs_CyiFvGfq4d7nNSf51ByOiESO1UAy-wHjD-wfHqb01E14vsOOjI9OFyZ1tiIaqXdUFs1rUQOzeNvFVvAJVWWXOL3oHE2hkxZPyhyE78JGSowbfB9NZcqUMhpwgjKFw26im3vs2PIi4IVUz3trJ899Lx--6qxErQrBni4C6-00tHVw3XBAZJ2QwkGC2otD1YoYyzCJbYnmlGnuEr7TJA_7tldlNQrLgS8BoYpVufwn46fneMu3jQp3_toJXcgOMfAqZrGtGyZip6bYFRJqbzPZDUH8xrgQKYTSKFAhK59AoDrS8nqw1iWi5GoWabFOebJSd1jrFfQ6hjAHiAAkZP_xCagobFTMcQDyzb5FcTfyPw9CQ6KO_vmIXtSKvKKGQT_7fyMImOoWlnvfrJoeUvyYPHWCFzU7RsdNWE0L9bpMyh9X-kvRQWSaLLpTbny_whZQ0ASGD6Puo4AROeAQjddkVFC1Ne7uM8MbtM_yt0Gphvsn10SkG1L5Fx1K9mV8-19Tiquoc9SV4iqu6HvVxNXzMPgvPGMfYAn75LoCGjSuCmd52EyxE=w3839-h1731"/>
                    <ul>
                        <li><a href="../pages/ParentHome">ΑΡΧΙΚΗ</a></li>
                        <li><a href="../pages/ParentFindProfessional">ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></li>
                        <li><a href="../pages/ParentHireProfessional">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></li>
                        <li><a href="../pages/ParentContract" >ΣΥΜΦΩΝΗΤΙΚΟ</a></li>
                        <li><a href="../pages/ParentHistory" >ΙΣΤΟΡΙΚΟ</a></li>
                    </ul>
                    <img className="pfp" alt="profile" src={userPfp==="" ? "https://lh3.googleusercontent.com/fife/ALs6j_FwIqAqEXKZb4nyxf8xs6_VF_pSjYMVgp8vQSarS9gabMlAiZWvHtedDfZWSRixthEBu5jTn-Cmc7nYqFJmyI6_oQE5IdV0DEeo6BLDGDHfTBNp5Q-NQb4S77KQQExyzdcYXQpKkz2MYHbWIdpqRCGbnJSUvzG38L1w0J_pvnMW5kRvNyiqX2_O2eFyTQZbU2ExaNpgvXLx3uO8_WnAd1bL2ckKDMlrGC5j7fNZyMPfxfbkvwUNtUOrYy51u_MIFwNzNTrs53bJcQpccuw-kcotTHPdK7S_mwAg_-HNkoM4NcQCZWLT50E42CwZqMHZifRtLh4ZCzd_LjB_AS4jBYkIT3pIQfuX4htCVUGwqZtXxwSS_l0L9EKnwXTKztdB-l25AnWGM1MzCFIIesVWSrgTw-fsV5wuX_ynuSCY9S6GVnPZTzm2HttneaQVzoDTYDSzU30ElTJWxXoerYbJJC7GGcyMEM76SlnZh-sv7FGj8iSN7ne6GRczo8GVAB7JWzQCNyTojfaMRCl9WnZhGXvR3JlniE1tmgCZxGYE4a7X-jM3RbLlcU-_VBR635e_QsgR21X9oKZzEoma0YLPJDnZ9VvJxHtTPrnz6SNVsXIKlj9s6kkc9qbV4El-GYtGXYQ2ahtWvhBBnLfK3l5qP82iPGjpWU_FgGg7Krn7pZjgSCiYqhyEYIWAx3Tqvumn0NOM5zRcvWiY_K9LevqKYSFoUj1O2ZcGMvsKcloRJyVCYxU-k2DdLM7pttBhUtRbq0Qbk-Qn63AeVMWFxQJg9ViMIKL1v8D_bzjZRfubId5mpoN6LrMdah5wTOO5gR5AwfLW9L84pZXg2E692ALwm1JBUDa79D6eDXTLptswwKSIRmRe7EDycdtG1M2bvaEFL_HufhpZHPHj_SAfJKipSS0Ae_TNhE_01WN5aYWz0NXTjUmpXzO3HbtVgU-Vn30RdshPtxiJRvSmtyHWkH17PrQcaz_5sa4bRU6qiGrL_1ptfuaIywIw9ZkJJysSlvWO95WcaeGMVCVE50AxJ1_uaVgx5sNijRNaIXeBAOKwWk7drokY5TgbuTxdYwh1w_FIXaMSl85Yy5xHQeWqezb9Bnvjoeb9QUmlJdAEbQCSGN7Ur-BHs4NXB1-UWY8X2NwXTDKdZjZkr3Oh5klknygx0p4RN5dv4-ogIrRGYma6UNaNqHwSgQbK0BqmYZOiBh_DXNdE3VtQ4jF3bXrBkT8pWw0BKONfxhodgiaBp5mg1xsvLg4u2MYkMQFfjlqPJoCjFQJe_-TcABLnslyj1sTLNW_X6ujP-s0e-vZrhkboIWhoXXpjNSyHdjzxs0NnfbXXnLzDfz1-plDi-fXyZm9SgPNKJRl9BQ_Ec_i8jNTUWLmSJM4pASOpZkPqyw3-RqG-iFsw6CCPpGgG4zVge74lAMfNLPUPYa7DWUS22ZudE1-IVOZSE6yrLmH3q65KWmxhBuL_HpXcv939u_fHBnudzrnb-179gfFHU5gplYnkxXxpIB6wmJuuMcXgDP2ueigs0u9InNLyck1cJxuRXElXlheF8eVDy6LXqFu0bjpjgqgnPEk0zWD1p9Ddi6DesaiHx_CIEB_WnFLQY2Dedgpn6I98cyirLIJf7QBQzq1pQI7gjXJmJCNs-RDhSzWttzQ3YI1oHz2bSsJnc5DlOYp76_y-_EXfp1NHQBoURL5p3zgBLLeuguvjElG2dtrFSZK6YdNNROSMLmHrX2srJF9X02EeKBg=w3839-h1731" : userPfp}/>
                </nav>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Γονέας/Κηδεμόνας</p>
                <button>Σύνδεση ως Επαγγελματίας</button>
            </div>
        </div>
	);
}

export default ParentNavigation;