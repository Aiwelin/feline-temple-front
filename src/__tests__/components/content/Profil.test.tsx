import { expect, it } from "vitest";
import Profil from "../../../components/content/Profil";

it("should work as expected with data", () => {
  const result = (
    <Profil
      address="18 RUE MAGDALINE, 44700 NANTES"
      avatar="src/assets/avatar/apichard.jpg"
      email="amandine.pichard.auditeur@lecnam.net"
      lastName="PICHARD"
      name="Amandine"
      password="Test@2023"
      isConnected
    />
  );
  expect(result).toMatchSnapshot();
});
