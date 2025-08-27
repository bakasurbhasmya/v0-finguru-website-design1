"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export default function ExplorePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const getFinancialTitle = (originalTitle: string, index: number) => {
    const financialTitles = [
      "Understanding Market Volatility in 2024",
      "Top 5 Cryptocurrency Trading Strategies",
      "Forex Market Analysis: EUR/USD Trends",
      "Equity Research: Tech Stocks Performance",
      "Options Trading: Risk Management Techniques",
      "Bitcoin Price Prediction Models",
      "Stock Market Psychology and Behavioral Finance",
      "Fundamental Analysis vs Technical Analysis",
      "Building a Diversified Investment Portfolio",
      "Day Trading vs Swing Trading Strategies",
      "Understanding Financial Derivatives",
      "Market Sentiment Analysis Tools",
    ]
    return financialTitles[index] || originalTitle
  }

  const getFinancialCategory = (index: number) => {
    const categories = ["Equity", "Crypto", "Forex", "F&O"]
    return categories[index % 4]
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading financial insights...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-primary border-primary/50">
            Knowledge Hub
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Explore Financial Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest market trends, trading strategies, and financial analysis from our experts
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-card/90 hover:border-border/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {getFinancialCategory(index)}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Dec {15 + (index % 15)}, 2024
                  </div>
                </div>
                <CardTitle className="font-serif text-lg leading-tight">
                  {getFinancialTitle(post.title, index)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 line-clamp-3">
                  {post.body.charAt(0).toUpperCase() + post.body.slice(1, 120)}...
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    Expert Analyst
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Load More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
