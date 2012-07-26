Map {
  background-color: #fff;
}

#drought {
  line-width:0;
  polygon-fill:#ae8;
  polygon-opacity: 0.95;
  [DM = 0]{ polygon-fill:#f3d56a;}
  [DM = 1]{ polygon-fill:#efc635;}
  [DM = 2]{ polygon-fill:#e28d2b;}
  [DM = 3]{ polygon-fill:#d9482b;}
  [DM = 4]{ polygon-fill:#a33622;}
}

#states[ISO="USA"] {
  line-color:#ccc;
  line-width:.8;
  polygon-fill: #f5f5f5;
}

#states_top[NAME_1="Texas"] {
  line-color: #000;
  line-width: .9;
  line-opacity: .3;
}