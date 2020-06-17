with import <nixpkgs> {};

# with pkgs;

stdenv.mkDerivation {
  name = "reactenv";

  buildInputs = [python37 nodejs-12_x git];
  shellHook = ''
    npm i serve create-react-app gh-pages firebase-tools
  '';
}

