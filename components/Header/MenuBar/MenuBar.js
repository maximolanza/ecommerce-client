import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <Container>
                <Grid>
                    <Grid.Column className="menu-bar__left" width={6} >
                        <MenuCategory />
                    </Grid.Column>
                    <Grid.Column className="menu-bar__right" width={10} >
                        <MenuOptions />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

function MenuCategory() {
    return (
        <Menu>
            <Link href="yoga">
                <Menu.Item as="a">Yoga</Menu.Item>
            </Link>
            <Link href="/meditacion">
                <Menu.Item as="a">Meditación</Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOptions() {
    return (
        <Menu>
            <Menu.Item>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu >
    )
}