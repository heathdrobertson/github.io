with import <nixpkgs> {};

# with pkgs;

stdenv.mkDerivation {
  name = "reactenv";

  buildInputs = [python37 nodejs-12_x git];
  shellHook = ''
    cd app
    npm run start
  '';
}

