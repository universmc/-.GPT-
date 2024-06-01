function create_ascii_border {
  local width height border_char
  width=50
  height=10
  border_char="*`tput sgr0`"
  
  for ((i=0; i<height; i++)); do
    if [[ $i -eq 0 || $i -eq $(($height-1)) ]]; then
      echo -n "${border_char//?/$border_char}"
    else
      echo -n "${border_char//?/${border_char:1:1}}"
    fi
    done
  echo
  done
};

create_ascii_border
