import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import React from "react";
import CardProduct from "../../../src/Components/CardProduct/CardProduct";
import { gql } from "@apollo/client";
import { describe, expect, it } from "@jest/globals";


const GET_ALL_BIKE = gql`
  query GetAllShop {
    getAllBike {
      id
      name
      imageId {
        url
      }
    }
  }
`;

const mocks = [
  {
    request: {
      query: GET_ALL_BIKE,
    },
    result: {
      data: {
        getAllBike: [
          {
            id: 1,
            name: "Bike 1",
            imageId: [{ url: "https://example.com/image1.png" }],
            price: "10$",
          },
          {
            id: 2,
            name: "Bike 2",
            imageId: [{ url: "https://example.com/image2.png" }],
            price: "20$",
          },
        ],
      },
    },
  },
];

describe("CardProduct", () => {
  it("should render loading state", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CardProduct />
      </MockedProvider>
    );
    expect(screen.getByText("Loading..."));
  });

  it("should render error state", async () => {
    const errorMock = {
      request: {
        query: GET_ALL_BIKE,
      },
      error: new Error("An error occurred"),
    };
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <CardProduct />
      </MockedProvider>
    );
    expect(
      await screen.findByText("Error : An error occurred")
    ).toMatch();
  });

  it("should render product cards", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CardProduct />
      </MockedProvider>
    );
    expect(await screen.findByText("Bike 1")).toMatch();
    expect(await screen.findByText("10$")).toMatch();
    expect(await screen.findByText("Bike 2")).toMatch();
    expect(await screen.findByText("20$")).toMatch();
  });
});
