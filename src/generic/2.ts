type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Top = Pick<AllType, "name" | "color">;
type Buttom = Pick<AllType, "position" | "weight">;

function compare(top: Top, bottom: Buttom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
