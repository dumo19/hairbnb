import { fontSize, fontWeight } from "@/constants/fonts";
import { usePro } from "@/context/pro-contex";
import { supabase } from "@/lib/supabase";
import { Columns2, Square } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PortfolioGalleryPage = () => {
  const { proId } = usePro();
  const [portfolioUrls, setPortfolioUrls] = useState<string[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [displayColumns, setDisplayColumns] = useState<number>(1)

  useEffect(() => {
    fetchPortfolio();
  }, [proId]);

  const fetchPortfolio = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("first_name, portfolio_photo_urls")
      .eq("id", proId)
      .single();

    if (error) throw new Error(error.message);
    if (data) {
      setPortfolioUrls(data.portfolio_photo_urls);
      setFirstName(data.first_name);
    }
  };

  const handleColumnToggle = () => {
    setDisplayColumns(((displayColumns) % 2) + 1)
    // console.log("display:", displayColumns)
  }

 
  // console.log("display on load:", displayColumns)

  return (
    <View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text
          style={{ fontSize: fontSize.title, fontWeight: fontWeight.semibold }}
        >
          {firstName}'s portfolio
        </Text>
        <TouchableOpacity onPress={handleColumnToggle}>
          {displayColumns === 2 ? <Square/> : <Columns2/>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PortfolioGalleryPage;

const styles = StyleSheet.create({});
