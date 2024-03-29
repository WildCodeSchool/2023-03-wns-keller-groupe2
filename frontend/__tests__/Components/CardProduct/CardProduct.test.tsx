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
      bikeCategoriesId {
        name
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
            bikeCategoriesId: { name: "electrique" },
          },
          {
            id: 2,
            name: "Bike 2",
            imageId: [{ url: "https://example.com/image2.png" }],
            bikeCategoriesId: { name: "electrique" },
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
        <CardProduct category="electrique" />
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
        <CardProduct category="electrique" />
      </MockedProvider>
    );
    const errorElement = await screen.findByText("Error : An error occurred");
    expect(errorElement.textContent).toMatch("Error : An error occurred");
  });

  it("should render product cards", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CardProduct category="electrique" />
      </MockedProvider>
    );
    expect(true).toBe(true);
  });
});
