const express = require('express')
const {default: axios} = require('axios')
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors())
app.get('/promos', async (req, res) => {
    try {
        const url = `
            https://store.steampowered.com/api/featuredcategories?cc=br&l=pt    
    `;

        const { data } = await axios.get(url);

        const promocoes = data.specials.items.map(jogoPromo => ({
            id: jogoPromo.id,
            nome: jogoPromo.name,
            desconto: jogoPromo.discount_percent + '%',
            preco_original: (jogoPromo.original_price / 100),
            preco_final:(jogoPromo.final_price / 100),
            imagem: jogoPromo.header_image
        }));
        res.json({ promocoesEspeciais: promocoes });
        //res.json({fetchTeste:[{"nome": "123", "sla": "sla"}]});
    } catch (error) {
        res.status(500).json({error: 'não foi possível buscar promoções'})
    }
})

app.listen(port, () => {
    console.log(`App sendo executado na porta ${port}`)
}
);