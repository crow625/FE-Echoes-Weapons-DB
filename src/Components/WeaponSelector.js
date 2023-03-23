import { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';

export const WeaponSelector = (props) => {

    // const [weapon, setWeapon] = useState({});

    return (
        <FormGroup>
            <Input type="select" value={props.weapon} onChange={(e) => {props.onWeaponSelect(e.target.value)}}>
                <option value="" hidden>Select a Weapon</option>
                {props.weapons.map((item, i) => {
                    return (
                        <option value={item} key={i}>{item.name}</option>
                    )
                })}
            </Input>
        </FormGroup>
    )
}