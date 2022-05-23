import { Jumbotron } from "../components";

const jumboData = require("../json/jumbo");

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    );
}
